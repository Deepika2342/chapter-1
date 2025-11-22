"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreateCompany = () => {
  const router = useRouter();

  const [gst, setGst] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [printName, setPrintName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [businessType, setBusinessType] = useState("");

  const [gstEnabled, setGstEnabled] = useState(false);
  const [tdsEnabled, setTdsEnabled] = useState(false);

  const [legalPerson, setLegalPerson] = useState("");
  const [destination, setDestination] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // ADDRESS
  const [officialAddress, setOfficialAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");

  // GST & TDS
  const [gstNumber, setGstNumber] = useState("");
  const [gstRegistrationDate, setGstRegistrationData] = useState("");
  const [gstRegistrationType, setGstRegistrationType] = useState("Regular");

  const [showPopup, setShowPopup] = useState(false);
  const [showCreateCompany, setShowCreateCompany] = useState(false);

  // ===================== CREATE COMPANY API =====================
  const companyUser = async () => {
    try {
      const payload = {
        name: companyName,
        printName: printName,
        companyType: companyType,
        businessType: businessType,

        // Contact
        legalPerson: legalPerson,
        destination: destination,
        email: companyEmail,
        phoneNumber: contactNumber,

        // Address
        address: officialAddress,
        state: state,
        city: city,
        country: "India",
        pincode: pinCode,

        // GST
        gstenabled: gstEnabled,
        gstNo: gstNumber,
        gstRegDate: gstRegistrationDate,
        gstRegType: gstRegistrationType,

        // TDS
        tds_enabled: tdsEnabled,
      };


      const response = await axios.post(
        `https://chapter.1.koffeekodes.in/api/company/insert`,
        payload
      );

      console.log("response:::", response);

      if (response?.data?.st) {
        const token = response.data.token;

        if (token) {
          localStorage.setItem("token", token);
        }

        alert("Company added successfully!");
        router.push("/selectCompany");
      } else {
        alert("Invalid Credential");
      }
    } catch (error) {
      console.error("Error saving company:", error);
      alert("Failed to create company!");
    }
  };

  return (
    <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-4 px-2">
      <div className="bg-white w-full max-w-8xl shadow-md rounded-none border border-gray-200 relative">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b-1 border-border px-1 gap-0 py-1">
          <div>
            <span className="hidden sm:inline text-gray-600 text-xs sm:text-sm md:text-base truncate font-semibold">
              Create Company
            </span>
            <p className="text-sm text-[#007F5F] font-light">
              Accounting Books / Select Company /{" "}
              <span className="font-semibold">Create Company</span>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              className="px-6 py-2 text-sm bg-[#105F62] text-white rounded-none hover:bg-[#43916F] transition"
              onClick={() => setShowPopup(true)}
            >
              CANCEL
            </button>

            <button
              onClick={companyUser}
              className="px-6 py-2 text-sm bg-[#105F62] text-white rounded-none hover:bg-[#43916F] transition"
            >
              SUBMIT
            </button>
          </div>
        </div>

        {/* GST POPUP */}
        {showPopup && (
          <div className="absolute top-[110%] left-[20px] w-[90%] sm:w-[500px] bg-white border mt-5 p-5 z-50 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left px-12">
              GSTIN
            </h2>

            <input
              type="text"
              className="border border-border px-3 py-2 text-sm w-full"
              placeholder="Enter GSTIN"
              onChange={(e) => setGst(e.target.value)}
            />

            <p className="text-[12px] text-gray-600 mb-4 text-left px-12">
              Enter your 15 digit GSTIN Number
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 text-sm bg-[#105F62] text-white rounded-none hover:bg-[#43916F] transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowPopup(false);
                  setShowCreateCompany(true);
                }}
                className="px-6 py-2 text-sm bg-[#105F62] text-white rounded-none hover:bg-[#43916F] transition"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* CREATE COMPANY POPUP */}
        {showCreateCompany && (
          <div className="absolute top-[110%] left-[20px] w-[90%] sm:w-[500px] bg-white border mt-5 p-5 z-50 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left px-12">
              Create Company
            </h2>

            <input
              type="text"
              className="border border-border px-3 py-2 text-sm w-full mb-4"
              placeholder="Enter Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowCreateCompany(false)}
                className="px-6 py-2 text-sm bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  alert("Company Created!");
                  setShowCreateCompany(false);
                }}
                className="px-6 py-2 text-sm bg-[#105F62] text-white rounded hover:bg-[#43916F] transition"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* MAIN FORM BODY */}
        <div className="p-6 space-y-6 text-[#003C2F]">

          {/* BASIC INFO */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Company Name*</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Print Name*</label>
                <input
                  type="text"
                  value={printName}
                  onChange={(e) => setPrintName(e.target.value)}
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Company Type*</label>
                <select
                  className="w-full border border-border px-3 py-2"
                  onChange={(e) => setCompanyType(e.target.value)}
                >
                  <option>Select</option>
                  <option>Private Limited</option>
                  <option>LLP</option>
                  <option>Proprietorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Business Type*</label>
                <select
                  className="w-full border border-border px-3 py-2"
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option>Select</option>
                  <option>Manufacturing</option>
                  <option>Trading</option>
                  <option> Regular</option>
                </select>
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">Company Contact Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Legal Person*</label>
                <input type="text"
                  value={legalPerson}
                  onChange={(e) => setLegalPerson(e.target.value)}
                  className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Destination</label>
                <input type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Company Email*</label>
                <input type="email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Contact Number*</label>
                <input type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full border border-border px-3 py-2" />
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">Company Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Official Address*</label>
                <input type="text"
                  value={officialAddress}
                  onChange={(e) => setOfficialAddress(e.target.value)}
                  className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">State*</label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Delhi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">City*</label>
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
                <label className="block text-sm font-semibold mb-1">Country*</label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  value="India"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">PIN Code*</label>
                <input className="w-full border border-border px-3 py-2" />
              </div>
            </div>
          </div>

          {/* GST & TDS SECTION */}
          <div className="space-y-6">

            {/* GST */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Enable GST</span>

                <button
                  onClick={() => setGstEnabled(!gstEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition ${gstEnabled ? "bg-[#1F8F73]" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${gstEnabled ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              {gstEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">GST Number*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">GST Registration Date*</label>
                    <input type="date" className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Registration Type*</label>
                    <select className="border border-border px-3 py-2 w-full text-sm bg-white">
                      <option>Regular</option>
                      <option>Composition</option>
                      <option>Exports</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* TDS */}
            <div className="border-t border-[#C8E5E3] pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Enable TDS</span>

                <button
                  onClick={() => setTdsEnabled(!tdsEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition ${tdsEnabled ? "bg-[#1F8F73]" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${tdsEnabled ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              {tdsEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">TAN Number*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Percentage*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateCompany;
