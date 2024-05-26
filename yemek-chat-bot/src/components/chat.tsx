"use client";
import { useChat } from "ai/react"; 
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import React from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  console.log(messages);
  return (
    <div className="relative max-w-2xl mx-auto h-screen">
      <div className="h-screen pt-10 space-y-4">
        <div className="h-[600px] overflow-auto">
          {messages.length === 0 ? (
            <div className="border p-4 rounded pt-10">
              Selam <br />
              Bu chatbot sadece yemek tarifleri hakkında bilgi vermektedir. Bu konu hakkında bana istediğin her şeyi sorabilirsin.
            </div>
          ) : (
            <ul className="space-y-2">
              {messages.map((item, index) =>
                item.role === "user" ? (
                  <li key={index} className="flex justify-end text-green-500">
                    <p className="border border-gray-200 rounded-md p-4">{item.content}</p>
                  </li>
                ) : (
                  <li key={index}>
                    <article className="prose lg:prose-xl">
                      <div className="border border-gray-200 rounded-md p-4">
                        <ReactMarkdown>{item.content}</ReactMarkdown>
                      </div>
                    </article>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        <div className="absolute w-full bottom-12">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                disabled={isLoading}
                placeholder="Hadi Konusalim, Bir şeyler yaz!"
                value={input}
                onChange={handleInputChange}
                type="text"
                className="border-2 rounded-md p-2 w-full"
              />
              <button className="bg-gray-200 p-1 rounded-md" type="submit">
                Gonder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
