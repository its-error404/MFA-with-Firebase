import React from "react";
import { logout, verifyIfUserIsEnrolled, verifyUserEmail } from "@/firebase/authentication";
import { User } from "@firebase/auth";
import Link from "next/link";
import { notify } from "@/utils/notify";
import WelcomeMessage from "./WelcomeMessage";

type Props = {
  currentUser: User | null;
};

export function UserComponent({ currentUser }: Props) {
  async function sendEmail() {
    if (currentUser) {
      const response = await verifyUserEmail(currentUser);

      if (response) {
        notify("An email has been sent to you");
      } else {
        notify("Something went wrong");
      }
    }
  }

  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex flex-col items-center justify-center px-12 pt-40 gap-y-12">
        {currentUser && <WelcomeMessage name={currentUser.displayName || ""} />}

        {/* Dashboard */}
        <div className="w-full p-8 bg-gray-200 rounded-lg">
          <h3 className="mb-4 text-xl font-bold">Dashboard</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Fancy Feature 1 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-medium">Quote of the Day</h4>
              <p className="text-gray-600">
                “If you don't really have a dream, you can't really push yourself; you don't really know what the target is.” ― Mahendra Singh Dhoni
              </p>
              <Link href="https://www.cricbuzz.com/profiles/265/ms-dhoni">
                <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">View Details</button>
              </Link>
            </div>

            {/* Fancy Feature 2 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-medium">Thank You for Visiting</h4>
              <p className="text-gray-600">This Website is built using NextJS and Firebase</p>
              <Link href="https://firebase.google.com/">
                <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">View Details</button>
              </Link>
            </div>

            {/* Fancy Feature 3 */}
            {/* ... */}
            {/* Fancy Feature 4 */}
            {/* ... */}
          </div>
        </div>

        {/* Conditional rendering based on user status */}
        {currentUser && currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) && (
          <Link className="w-full text-center underline hover:text-black" href="/mfa">
            Activate multifactor authentication
          </Link>
        )}

        {currentUser && !currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) && (
          <button onClick={sendEmail} className="w-full text-center underline hover:text-black">
            Verify your email
          </button>
        )}

        <button onClick={logout} className="flex items-center justify-center px-6 bg-black rounded-xl h-11">
          <span className="relative text-base font-light text-white">Disconnect</span>
        </button>
      </div>
    </div>
  );
}
