/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import { api_url, shipAddres_url } from '../config/env';
import { userInfo_url } from '../config/env';
import { useNavigate } from 'react-router-dom';

export const MyAccountContext = createContext({});

export const UserDetailProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const navigate = useNavigate();
  const [userAddress, setUserAddress] = useState();
  const [userinfo, setUserInfo] = useState();
  const [categoryData, setCategoryData] = useState();

  async function userDetails() {
    const response = await fetch(
      `${shipAddres_url}&tag=get_user_shipment_address&intUserID=${userId}`
    );
    const bannerData = await response.json();

    setUserAddress(bannerData?.data[0]);
  }
  async function userInfoDisplay() {
    const response = await fetch(
      `${userInfo_url}&tag=get_users&intID=${userId}`
    );
    const userData = await response.json();

    setUserInfo(userData?.data[0]);
  }
  const handleManuClick = async (categoryId, seolink) => {
    try {
      const response = await fetch(
        `${api_url}&tag=get_items_web&strCategorySEOLink=${seolink}`
      );

      if (response.ok) {
        const manudata = await response.json();

        setCategoryData(manudata.data);

        navigate(`manuCategory`);
      } else {
        console.error('API request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  useEffect(() => {
    userDetails();
    userInfoDisplay();
  }, []);

  return (
    <MyAccountContext.Provider
      value={{
        userId,
        setUserId,
        userAddress,
        userinfo,
        handleManuClick,
        categoryData,
      }}
    >
      {children}
    </MyAccountContext.Provider>
  );
};
