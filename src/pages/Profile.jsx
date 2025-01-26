import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Pencil } from "lucide-react";
import Sidebar from "../components/adminSide";
import TopBar from "../components/topBar";
import { useNavigate } from "react-router-dom";


function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        navigate("/login");
        return;
      }

      // Decode the token to get the user ID
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id; // Ensure your token contains `id`

      const response = await fetch(
        `https://ecommerce-kpd4.onrender.com/api/v1/users/auth/profile/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Split the full name into first name and last name
        const [firstName, lastName] = data.fullName.split(" ");
        setUserProfile({ ...data, firstName, lastName });
      } else {
        if (response.status === 401) {
          setError("Unauthorized. Please log in.");
          navigate("/login");
        } else {
          const errorText = await response.text();
          setError(`Failed to fetch profile: ${errorText}`);
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex bg-other-green/5">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">My Profile</h2>
          </div>
        
          <div className="grid gap-4">
            <div>
              <div className="p-12 bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="border-other-green h-1/3 w-1/3 border-[2px] rounded-full">
                      <img
                        src={userProfile?.profilePicture || "default.png"}
                        alt="Profile picture"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-other-green">
                      {userProfile?.fullName}
                    </h1>
                    <div className="items-center gap-2">
                      <p>{userProfile?.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {userProfile?.city}, {userProfile?.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-12 bg-white rounded-lg shadow-md">
                <p className="text-lg font-semibold border-b-2 text-main-green border-main-green/20 py-4">
                  Personal Information
                </p>

                <div className="grid gap-6 md:grid-cols-3 pt-8">
                  <div>
                    <p className="text-sm text-muted-foreground">First Name</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.firstName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Name</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email Address
                    </p>
                    <p className="font-medium text-other-green">
                      {userProfile?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">User Role</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-12 bg-white rounded-lg shadow-md">
                <p className="text-lg font-semibold border-b-2 text-main-green border-main-green/20 py-4">
                  Address
                </p>

                <div className="grid gap-6 md:grid-cols-3 pt-8">
                  <div>
                    <p className="text-sm text-muted-foreground">Country</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.country}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p className="font-medium text-other-green">
                      {userProfile?.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Postal Code</p>
                    <p className="font-medium text-other-green">
                      00000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
