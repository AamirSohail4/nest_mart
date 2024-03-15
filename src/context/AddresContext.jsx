/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import { api_url } from '../config/env';

export const AddressContext = createContext();

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState();
  const [contactNo, setContacNo] = useState();
  const [contactNo2, setContacNo2] = useState();

  async function ContactNoDisplay() {
    const response = await fetch(`${api_url}&tag=get_webtext_content&intID=10`);
    const bannerData = await response.json();
    setContacNo(bannerData.data[0].strText);
  }
  async function ContactNo2Display() {
    const response = await fetch(`${api_url}&tag=get_webtext_content&intID=11`);
    const bannerData = await response.json();
    setContacNo2(bannerData.data[0].strText);
  }

  async function AddressDisplay() {
    const response = await fetch(`${api_url}&tag=get_webtext_content&intID=5`);
    const bannerData = await response.json();
    setAddress(bannerData.data[0].strText);
  }

  useEffect(() => {
    AddressDisplay();
    ContactNoDisplay();
    ContactNo2Display();
  }, []);

  return (
    <AddressContext.Provider
      value={{ contactNo2, contactNo, address, AddressDisplay }}
    >
      {children}
    </AddressContext.Provider>
  );
};
