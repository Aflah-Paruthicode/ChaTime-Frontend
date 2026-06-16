import React from "react";
import { baseUrl } from "../utils/constants";
import axios from "axios";

const Premium = () => {
  const handleBuyPremium = async (type) => {
    const order = await axios.post(baseUrl + "/payment/create", { membershipType: type }, { withCredentials: true });

    const { keyId, amount, currency, orderId, notes } = order.data;

    const options = {
      key: keyId,
      amount: amount,
      currency: currency,
      name: "Talksyo",
      description: "Connect with people from the whole world",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        membershipType: notes.membershipType,
      },
      theme: {
        color: "#155dfc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="mt-32 text-black px-32">
      <div class="flex w-full flex-col lg:flex-row items-center gap-4 h-[70vh]">
        <div class="$$card bg-white border border-white/10 shadow-2xl rounded-box grid h-80 grow p-8 place-items-center hover:border-blue-500/50 transition-all duration-300 group">
          <h1 className="font-bold text-2xl group-hover:text-blue-500  transition-colors duration-300">Silver Membership</h1>
          <ul className="leading-loose italic">
            <li> - Chat with other people</li>
            <li> - 100 Connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 3 Months</li>
          </ul>
          <button className="btn justify-self-end border-none hover:bg-blue-500" onClick={() => handleBuyPremium("silver")}>
            Buy Silver
          </button>
        </div>
        <div class="$$divider lg:$$divider-horizontal">OR</div>
        <div class="$$card bg-white border border-white/10 shadow-2xl rounded-box grid h-80 grow p-8 place-items-center hover:border-blue-500/50 transition-all duration-300 group">
          <h1 className="font-bold text-2xl group-hover:text-blue-500  transition-colors duration-300">Gold Membership</h1>
          <ul className="leading-loose italic">
            <li> - Chat with other people</li>
            <li> - 300 Connection requests per day</li>
            <li> - Blue tick</li>
            <li> - 6 Months</li> 
          </ul>
          <button className="btn justify-self-end border-none hover:bg-blue-500" onClick={() => handleBuyPremium("gold")}>
            Buy Gold
          </button>
        </div> 
        <div class="$$divider lg:$$divider-horizontal">OR</div>
        <div class="$$card bg-white border border-white/10 shadow-2xl rounded-box grid h-80 grow p-8 place-items-center hover:border-blue-500/50 transition-all duration-300 group">
          <h1 className="font-bold text-2xl group-hover:text-blue-500  transition-colors duration-300">Diamond Membership</h1>
          <ul className="leading-loose italic">
            <li> - Chat with other people</li>
            <li> - infinite Connection requests per day</li>
            <li> - Gold tick</li>
            <li> - 6 Months</li>
          </ul>
          <button className="btn justify-self-end border-none hover:bg-blue-500" onClick={() => handleBuyPremium("diamond")}>
            Buy Diamond
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
