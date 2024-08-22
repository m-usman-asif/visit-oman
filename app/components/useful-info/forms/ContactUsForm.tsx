"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { countries, entities } from "@/app/data/data";
import {ScreenContainer} from "@/app/components/shared";
import "./forms.css";
type MyCustomErrorProps = {
  children: React.ReactNode;
};
const MyCustomError: React.FC<MyCustomErrorProps> = ({ children }) => (
  <small className="text-red-800">{children}</small>
);
const ContactUsForm = ({ data, locale }: any) => {
  const [isCaptchaVerified, setIsCaptchaVerified] =
    useState(false);
  const initialValues = {
    companyName: "",
    typeOfEntity: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    acceptTerms: false,
  };
  function onChange(value: any) {
    setIsCaptchaVerified(true);
  }
  return (
    <div className="contact-us-form-container mb-[80px]">
      <ScreenContainer>
        <div className="">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              companyName: Yup.string().required("Required"),
              typeOfEntity: Yup.string().required("Required"),
              name: Yup.string().required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              phone: Yup.string().required("Required"),
              country: Yup.string().required("Required"),
              message: Yup.string().required("Required"),
              acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
              file: Yup.mixed().required("A file is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="contactus-form-wrapper">
              {/* row-1 */}
              <div className="cfw-row">
                <div className="cfw-col">
                  <label htmlFor="companyName">
                    Company Name
                  </label>
                  <Field
                    name="companyName"
                    type="text"
                    className="vo-paragraph h-[46px] border-[1px] border-[#E1E1E1]"
                  />
                 
                </div>
                <div className="cfw-col">
                  <label htmlFor="typeOfEntity">
                    Type of Entity
                  </label>
                  <Field
                    name="typeOfEntity"
                    as="select"
                    placeholder="Select"
                    className="vo-paragraph cfw-select h-[46px] cursor-pointer border-[1px] border-[#E1E1E1] font-Montserrat"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                    >
                      Select
                    </option>
                    {entities.map(
                      (entity: any, index: number) => (
                        <option
                          value={entity.label}
                          key={index}
                        >
                          {entity.label}
                        </option>
                      ),
                    )}
                  </Field>
                 
                </div>
              </div>
              {/* row-2 */}
              <div className="cfw-row">
                <div className="cfw-col">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    type="text"
                    className="vo-paragraph h-[46px] border-[1px] border-[#E1E1E1]"
                  />
                
                </div>
                <div className="cfw-col">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className="vo-paragraph h-[46px] border-[1px] border-[#E1E1E1]"
                  />
                
                </div>
              </div>
              {/* row-3 */}
              <div className="cfw-row">
                <div className="cfw-col">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    name="phone"
                    type="text"
                    className="h-[46px] border-[1px] border-[#E1E1E1]"
                  />
                 
                </div>
                <div className="cfw-col">
                  <label htmlFor="country">Country</label>
                  <Field
                    name="country"
                    as="select"
                    placeholder="Select"
                    className="vo-paragraph cfw-select h-[46px] cursor-pointer border-[1px] border-[#E1E1E1] font-Montserrat"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                    >
                      Select
                    </option>
                    {countries.map(
                      (country: any, index: number) => (
                        <option
                          value={country.label}
                          key={index}
                        >
                          {country.label}
                        </option>
                      ),
                    )}
                  </Field>
                 
                </div>
              </div>
              {/* row-4 */}
              <div className="cfw-row">
                <div className="cfw-col">
                  <label htmlFor="message">Message</label>
                  <Field
                    name="message"
                    as="textarea"
                    className=" cfw-textarea vo-paragraph border-[1px] border-[#E1E1E1]"
                  />
                 
                </div>
              </div>
              {/* row-5 */}
              <div className="cfw-row">
                <div className="cfw-col">
                  <div className="flex flex-row items-center gap-[20px]">
                    <Field
                      type="checkbox"
                      name="acceptTerms"
                      className="peer relative left-0 h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded-sm border !p-0 outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-[#29B6A3]"
                      id="acceptTerms"
                    />
                    <label
                      className="vo-paragraph format-link cursor-point inline-block w-full "
                      htmlFor="acceptTerms"
                    >
                      I accept the
                      <a
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-[4px]"
                      >
                        Terms and Conditions
                      </a>
                      , relating to the information provided
                      in this form.
                    </label>
                  </div>

                 
                </div>
              </div>
              <div className="cfw-recaptcha">
                <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={onChange}
                />
              </div>
              <button
                className="btn-submit-form hover:bg-white hover:text-[#000000] hover:shadow-lg"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default ContactUsForm