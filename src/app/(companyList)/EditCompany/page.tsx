"use client";

import React, { useState } from "react";
import Image from "next/image";
import CancelChange from "@/img/CancelChange.png";
import { FiTrash2, FiUploadCloud } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const EditCompany = () => {
    const [showPopup, setShowPopup] = useState(false);
console.log(showPopup);

    // File state
    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        attachment: null,
        tradeLogo: null,
        signCaption: null,
    });

    const selectedFiles = [
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
    ];

    // Single, simple file handler
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const file = e.target.files?.[0] || null;

        if (inputName) {
            setFiles((prev) => ({
                ...prev,
                [inputName]: file,
            }));
        }
    };

    const fileInputs = ["Attachment", "Trade Logo", "Sign Caption"];

    return (
        <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-4 px-2">
            <div className="bg-white w-full max-w-8xl shadow-md border border-gray-200">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-border px-1 py-1">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Edit Company</h2>
                        <p className="text-sm text-[#007F5F] font-light">
                            Accounting Books / Select Company /{" "}
                            <span className="font-semibold">Edit Company</span>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        {/* CANCEL Button */}
                        <button
                            className="px-5 py-2 bg-[#105F62] text-white text-sm transition"
                            onClick={() => setShowPopup(true)}
                        >
                            CANCEL
                        </button>

                        {/* Popup */}
                        {showPopup && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
                                <div
                                    className="rounded-none shadow-lg flex flex-col items-center text-center overflow-hidden"
                                    style={{ width: "350px", height: "340px" }}
                                >
                                    <div className="bg-border w-full flex justify-center items-center py-6">
                                        <Image
                                            src={CancelChange}
                                            alt="Cancel Changes"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <div className="bg-white w-full flex flex-col items-center text-center p-2 flex-grow">
                                        <h1 className="text-lg font-bold text-[#060808] mb-2">
                                            Cancel Changes!
                                        </h1>
                                        <p className="text-xs text-gray-700 mb-6 px-4">
                                            Leaving this page will delete all unsaved changes.
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={() => {
                                                    alert("Changes Cancelled!");
                                                    setShowPopup(false);
                                                }}
                                                className="bg-[#0C6663] text-white px-10 py-2 text-sm"
                                            >
                                                YES
                                            </button>
                                            <button
                                                onClick={() => setShowPopup(false)}
                                                className="bg-[#0C6663] text-white px-10 py-2 text-sm"
                                            >
                                                NO
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SUBMIT Button */}
                        <button className="px-5 py-2 bg-[#105F62] text-white text-sm transition">
                            SUBMIT
                        </button>
                    </div>
                </div>

                {/* File Inputs */}
                <div className="p-6 space-y-6 text-[#003C2F]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {fileInputs.map((label) => {
                            const key = label.toLowerCase().replace(" ", "");
                            return (
                                <div key={key}>
                                    <label className="block text-sm font-semibold mb-2 text-gray-800">
                                        {label}
                                    </label>
                                    <label
                                        htmlFor={`${key}File`}
                                        className="border-2 border-border rounded-none flex flex-col items-center justify-center h-28 cursor-pointer hover:bg-blue-50 transition"
                                    >
                                        <FiUploadCloud className="text-teal-800 w-6 h-6 mb-1" />
                                        <p className="text-gray-700 text-xs text-center px-2">
                                            Drag and drop a file here or click
                                        </p>
                                        <input
                                            type="file"
                                            name={key} 
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    {files[key] && (
                                        <p className="mt-1 text-xs text-green-700 truncate">
                                            Selected: <span className="font-medium">{files[key]?.name}</span>
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Certificate List */}
                <div className="w-full bg-white p-4 rounded-none">
                    <h2 className="text-sm font-semibold mb-3 text-gray-800">
                        Selected Attachment
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center border border-border bg-white rounded-none px-3 py-2 shadow-sm w-56"
                            >
                                <div className="flex items-center gap-2 flex-1">
                                    <FaFilePdf className="text-green-700 w-8 h-8" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-800">{file.name}</span>
                                        <span className="text-xs text-gray-500">{file.size}</span>
                                    </div>
                                </div>
                                <button className="ml-2 text-green-700 hover:text-red-600 transition">
                                    <FiTrash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCompany;
