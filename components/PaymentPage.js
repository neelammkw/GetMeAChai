"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";


const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payment, setPayment] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("🦄 Payment has been made", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    if(session) {
    router.push(`/${username}`);
    }
  }, [session]);

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      let u = await fetchuser(username);
      setcurrentUser(u);
      let dbpayments = await fetchpayments(username);
      setPayment(dbpayments);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pay = async (amount) => {
    try {
      let a = await initiate(amount, username, paymentform);
      let orderId = a.id;
      var options = {
        key: currentUser.razorpayid,
        amount: amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover relative w-full bg-red-50">
        <img
          className="cover w-full overflow-hidden"
          src={currentUser.coverpic}
          alt=""
        />
        <div className="absolute md:-bottom-12 md:right-[46%] -bottom-10 right-[36%]  border-black justify-center ">
          <img
            className="rounded-full overflow-hidden  "
            width={100}
            height={100}
            src={currentUser.profilepic}
          />
        </div>
      </div>
      <div className="info flex flex-col items-center justify-start my-20 pb-10 gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400 ">Lets help {username} get a chai!</div>
        <div className="text-slate-400 ">
          {payment.length} Payments .  {currentUser.name} has raised ₹{payment.reduce((a,b) => a + b.amount, 0)}
        </div>
        <div className="payment flex gap-3 m-5 flex-col md:flex-row ">
          <div className="supporters w-full md:w-1/2 bg-red-50 text-black p-2 rounded-lg">
            <h2 className="text-2xl font-bold my-2 text-center ">Top 10 Supporters</h2>
            <ul className="mx-4">
              {payment.length === 0 && <li>No payment yet</li>}
              {payment.map((p) => (
                <li key={p.id} className="my-2 flex items-center">
                  <img
                    width={30}
                    className="rounded-full m-2"
                    src="./user.jpg"
                    alt="user"
                  />
                  <span>
                    {p.name} donated{" "}
                    <span className="font-bold">₹{p.amount}</span> with a
                    message: "{p.message}"
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="makePayment md:w-1/2 w-full bg-slate-500 rounded-lg text-white p-2 ">
            <h2 className="text-2xl font-bold my-3"> Make a Payment </h2>
            <div className="flex gap-2 flex-col">
              <div>
                <input
                  value={paymentform.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input
                type="text"
                value={paymentform.message}
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
                placeholder="Enter Message"
                name="message"
              />
              <input
                type="text"
                onChange={handleChange}
                value={paymentform.amount}
                className="w-full p-3 rounded-lg bg-slate-600"
                placeholder="Enter Amount"
                name="amount"
              />

              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-cyan-900 disabled:bg-slate-300 "
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length<1
                }
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(40000)}
              >
                Pay ₹ 400
              </button>{" "}
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(80000)}
              >
                Pay ₹ 800
              </button>{" "}
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(100000)}
              >
                Pay ₹ 1000
              </button>
              {/* Other buttons */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
