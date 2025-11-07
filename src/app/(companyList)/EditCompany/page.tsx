"use client";

import React, { useState } from "react";
import Image from "next/image";
import CancelChange from "@/img/CancelChange.png";
import { FiTrash2, FiUploadCloud } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const EditCompany = () => {
    const [gstEnabled, setGstEnabled] = useState(false);
    const [tdsEnabled, setTdsEnabled] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [file, setFile] = useState(null);

    const files = [
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
    ];

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-4 px-2">
            <div className="bg-white w-full max-w-8xl shadow-md rounded-none border border-gray-200">
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
                                    {/* Top Green Section */}
                                    <div className="bg-border w-full flex justify-center items-center py-6">
                                        <Image
                                            src={CancelChange}
                                            alt="Cancel Changes"
                                            width={150}
                                            height={150}
                                            className="mx-auto"
                                        />
                                    </div>

                                    {/* Bottom White Section */}
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

                {/* Form Body */}
                <div className="p-6 space-y-6 text-[#003C2F]">
                    {/* Basic Info */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="ABC Ltd."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Print Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="ABC Ltd."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Type *
                                </label>
                                <select className="w-full border border-border px-3 py-2">
                                    <option>Select</option>
                                    <option>Private Limited</option>
                                    <option>LLP</option>
                                    <option>Proprietorship</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Business Type*
                                </label>
                                <select className="w-full border border-border px-3 py-2">
                                    <option>Select</option>
                                    <option>Manufacturing</option>
                                    <option>Trading</option>
                                    <option>Services</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Financial Year
                                </label>
                                <div className="flex gap-4">
                                    <input
                                        type="date"
                                        className="border border-border px-3 py-2 w-full rounded-none text-sm
                    [&::-webkit-calendar-picker-indicator]:bg-[#0C6663]
                    [&::-webkit-calendar-picker-indicator]:p-1
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    [&::-webkit-calendar-picker-indicator]:filter-invert"
                                    />
                                    <input
                                        type="date"
                                        className="border border-border px-3 py-2 w-full rounded-none text-sm
                    [&::-webkit-calendar-picker-indicator]:bg-[#0C6663]
                    [&::-webkit-calendar-picker-indicator]:p-1
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    [&::-webkit-calendar-picker-indicator]:filter-invert"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-semibold text-[#43916F] pb-3 mb-1">
                            Company Contact Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Legal Person *
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="Abcd"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="Manager"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Email *
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Contact Number *
                                </label>
                                <input
                                    type="tel"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="1234567890"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h3 className="font-semibold text-[#43916F] pb-3 mb-1">
                            Company Address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Official Address *
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="Street, City"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">State *</label>
                                <select className="w-full border border-border px-3 py-2">
                                    <option>Select</option>
                                    <option>Maharashtra</option>
                                    <option>Gujarat</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">City *</label>
                                <select className="w-full border border-border px-3 py-2">
                                    <option>Select</option>
                                    <option>Mumbai</option>
                                    <option>Surat</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Country *</label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    value="India"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">PIN Code *</label>
                                <input
                                    type="text"
                                    className="w-full border border-border px-3 py-2"
                                    placeholder="395001"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Add Company Logo/Signature */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {["Attachment", "Trade Logo", "Sign Caption"].map((label, i) => (
                            <div key={i}>
                                <label className="block text-sm font-semibold mb-2 text-gray-800">
                                    {label}
                                </label>
                                <label
                                    htmlFor={`${label.toLowerCase().replace(" ", "")}File`}
                                    className="border-2 border-border rounded-none  flex flex-col items-center justify-center h-28 cursor-pointer hover:bg-blue-50 transition"
                                >
                                    <FiUploadCloud className="text-teal-800 w-6 h-6 mb-1" />
                                    <p className="text-gray-700 text-xs text-center px-2">
                                        Drage and drop a file here or click                                    </p>
                                    <input
                                        id={`${label.toLowerCase().replace(" ", "")}File`}
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                {file && (
                                    <p className="mt-1 text-xs text-green-700 truncate">
                                        Selected: <span className="font-medium">{file.name}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Certificate List */}
                    <div className="w-full bg-white p-4 rounded-none">
                        <h2 className="text-sm font-semibold mb-3 text-gray-800">
                            Selected Attachment
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {files.map((file, index) => (
                                <div
                                    key={index}
                                    className="flex items-center border border-border bg-white rounded-none px-3 py-2 shadow-sm w-56"
                                >
                                    <div className="flex items-center gap-2 flex-1">
                                        <FaFilePdf className="text-green-700 w-8 h-8" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-800">
                                                {file.name}
                                            </span>
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
        </div>
    );
};

export default EditCompany;
