import React from 'react';

function VirtualQForm() {
    return (
        <div className="bg-white p-4 pl-20 rounded-lg shadow-md">
            <div className="flex space-x-96 mb-4">
                <h2 className="text-xl text-goldenyellow font-bold">Virtual-Q</h2>
                <p className="text-sm font-bold">(Pilgrims have to report 180 minutes before the selected Slot and Route)</p>
            </div>
            <hr className='h-1 bg-black' />

            <form>
                <div className="mb-4 flex items-center space-x-36">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                    <input type="date" id="date" className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="mb-4 flex items-center space-x-24">
                    <label htmlFor="route" className="block text-sm font-medium text-gray-700">Select Route:</label>
                    <select id="route" className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="select route">select route</option>
                        <option value="">Pamba - Marakkoottam-4 Kms</option>
                        <option value="">Vandiperiyar-Sathram-Pulmedu-16 kms</option>
                        <option value="">Erumely-Kalaketti Treditional Path -46kms</option>
                    </select>
                </div>

                <button type="submit" className="bg-goldenyellow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </form>

            <div className="mt-4">
                <p className="text-sm">Note:</p>
                <ul className="list-disc space-y-2">
                    <li>Pilgrim registration is mandatory with valid Mobile Number & e-Mail address for availing online Services. Virtual-Q booking is not required for children with age of below 5 years.</li>
                    <li>Annadanam is available at free of cost at Sabarimala, Pamba, Nilakkal and Erumely temples. All pilgrims can make use of the facility during their visit to Sabarimala.</li>
                    <li>Travancore Devaswom Board will never ask to share details of Debit & Credit cards, Account Number, ATM PIN, Passwords, CVV, OTP over phone/email. Please do not share with anyone.</li>
                </ul>
                <p className="text-sm">Please click here to refer the help videos.</p>
                <p className="text-sm">For any enquiries and grievances, please write to Pilgrim help desk grievance virtuaiqtdb@gmail.com</p>
            </div>
        </div>
    );
}

export default VirtualQForm;