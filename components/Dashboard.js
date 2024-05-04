"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [router, session, getData]);


  const handleChange = (e) => {
    // console.log("Form before update:", form);

    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const getData = async () => {
    try {
      // Fetch user data using session user name
      const userData = await fetchuser(session.user.name);
      // Update form state with user data if it exists
      if (userData) {
        setForm(userData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleSubmit = async (e) => {
    try {
      // Call API to update user profile with form data
      await updateProfile(e, session?.user.name, form);
      // Show success message
      toast("🦄 Profile Updated", {
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
    } catch (error) {
      console.error("Error updating profile:", error);
      // Show error message
      alert("Failed to update profile. Please try again.");
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

      <div className="container  text-black mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <form className="max-w-md mx-auto" action={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name ? form.name : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email ? form.email : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={form.username ? form.username : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profilepic"
              className="block text-sm font-medium text-gray-300"
            >
              Profile Picture
            </label>
            <input
              type="text"
              id="profilepic"
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="profilepic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coverpic"
              className="block text-sm font-medium text-gray-300"
            >
              Cover Picture
            </label>
            <input
              type="text"
              id="coverpic"
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="coverpic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="razorpayid"
              className="block text-sm font-medium text-gray-300"
            >
              Razorpay ID
            </label>
            <input
              type="text"
              id="razorpayid"
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="razorpayid"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="razorpaysecret"
              className="block text-sm font-medium text-gray-300"
            >
              Razorpay Secret
            </label>
            <input
              type="text"
              id="razorpaysecret"
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="razorpaysecret"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
