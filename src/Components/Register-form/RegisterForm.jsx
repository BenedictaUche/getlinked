import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  FormControl,
  Input,
  Textarea,
  FormLabel,
  Stack,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: true,
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // var raw = JSON.stringify({
  //   email: "sample@eexample.com",
  //   phone_number: "0903322445533",
  //   team_name: "Space Explore",
  //   group_size: 10,
  //   project_topic: "Web server propagation",
  //   category: 1,
  //   privacy_poclicy_accepted: true,
  // });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate phone number
    if (name === "phone_number") {
      const phoneError = validatePhone(value);
      setPhoneError(phoneError);
    }

    // Validate email
    if (name === "email") {
      const emailError = validateEmail(value);
      setEmailError(emailError);
    }
  };

  // Validation functions
  function validatePhone(value) {
    const phonePattern = /^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phonePattern.test(value) ? "" : "Invalid phone number";
  }

  function validateEmail(value) {
    // Basic email pattern validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value) ? "" : "Invalid email address";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = "https://backend.getlinked.ai";
      const response = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log("Response from API:", responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form Data:", formData);
  };


  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSelectedSize(value);
  };


  function validatePhone(value) {
    const phonePattern = /^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phonePattern.test(value) ? "" : "Invalid phone number";
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };


  const baseUrl = "https://backend.getlinked.ai";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/hackathon/categories-list`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Categories:", data);
        setCategoryOptions(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [baseUrl, requestOptions]);

  return (
    <>
      <div className="container register-container w-[100%] text-white">
        <h2 className="registerf py-6 text-[#D434FE] absolute top-8">Register</h2>
        <p className="part">Be part of this movement</p>
        <p className="create pt-4">CREATE YOUR ACCOUNT</p>
        <div className="register-cont-try">
          <form onSubmit={handleSubmit}>
            <div className="py-4 flex gap-8 flex-col md:flex-row w-full">
              <Stack>
                <FormLabel>Team's Name</FormLabel>
                <Input
                  type="text"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleInputChange}
                  placeholder="Enter the name of your group"
                />
              </Stack>
              <Stack>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  isInvalid={validatePhone(formData.phone_number)}
                />
              </Stack>
            </div>

            <div className="py-4 flex gap-8 flex-col md:flex-row w-full">
              <Stack>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                />
              </Stack>
              <Stack>
                <FormLabel>Project Topic</FormLabel>
                <Input
                  type="text"
                  name="project_topic"
                  value={formData.project_topic}
                  onChange={handleInputChange}
                  placeholder="What is your group project topic?"
                />
              </Stack>
            </div>

            <div className="py-4 flex gap-8 w-full">
              <Stack className="w-full md:w-[13.5rem]">
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select your category"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  {categoryOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              </Stack>
              <Stack className="w-[13.5rem]">
                <FormLabel>Group Size</FormLabel>
                <Select
                  placeholder="Select"
                  onChange={handleSizeChange}
                  value={selectedSize}
                >
                  <option value="1">1</option>
                  <option value="2-4">2-4</option>
                  <option value="5-10">5-10</option>
                </Select>
              </Stack>
            </div>

            <p className="text-[#FF26B9] py-5 please">
              Please review your registration details before submitting
            </p>
          </form>
          <Checkbox
            className="check pb-4"
            name="privacy_poclicy_accepted"
            checked={formData.privacy_poclicy_accepted}
            onChange={handleInputChange}
          >
            I agreed with the event terms and conditions and privacy policy
          </Checkbox>
          <div className="register-btn-div">
          <Button
            type="submit"
            className="registerform-btn"
            onClick={handleSubmit}
            style={{
              background: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
              color: "#FFFFFF",
              fontSize: "16px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Register Now
          </Button>
          </div>
        </div>
      </div>
    </>
  );
}
