import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyAHssk7E3pxHN0o_xAvEAnUZQUqMhPS6YY");
const Advice = () => {
    const { transactions } = useContext(GlobalContext);
    const [apiData, setApiData] = useState("");
    const [loading, setLoading] = useState(true); // Initialize loading state as true
  
    useEffect(() => {
        const amounts = transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => acc + item, 0);
        const fetchData = async () => {
            try {
              const model = genAI.getGenerativeModel({ model: "gemini-pro" });
              const prompt = total < 0 ? "do not add {**} in prompt . Give some money saving advice in bullet points" : "do not add {**} in prompt . Give investing advice in bullet points";
              const result = await model.generateContent(prompt);
              const response = await result.response;
              let text = response.text();
              const words = text.split(" ");
              // Limit the text to 100 words if it exceeds
              if (words.length > 90) {
                text = words.slice(0, 90).join(" ") + "...";
              }
              setApiData(text);
              setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
              console.error("Error fetching data:", error);
              setLoading(false); // Set loading to false in case of error
            }
          };
      
          fetchData();
        }, [transactions]);

    if (loading) {
        return <div>Loading advice...</div>;
    }

    return (
        <div >
            <h2>Financial Advice</h2>
            <p>{apiData}</p>
        </div>
    );
}

export default Advice;
