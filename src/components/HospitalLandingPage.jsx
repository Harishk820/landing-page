import React from 'react'
import { Button, Img, List, Text } from "components";

const HospitalLandingPage = () => {
  return (
    <div>

      <div className="bg-gray-50 flex flex-col font-sourcesanspro items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[953px] items-center justify-start p-[25px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group18.png')" }}
            >
              <div className="flex flex-col gap-[58px] items-start justify-start max-w-[1199px] mb-[115px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[15px] sm:text-3xl md:text-[32px] text-[34px] text-light_blue-A700"
                    size="txtSourceSansProBold34"
                  >
                    <span className="text-light_blue-A700 font-sourcesanspro text-left font-bold">
                      Medi
                    </span>
                    <span className="text-deep_orange-300 font-sourcesanspro text-left font-bold">
                      Care+
                    </span>
                  </Text>

                  {/*------- navbar------- */}

                  <div className="flex flex-row items-center justify-center md:ml-[0] ml-[388px] md:mt-0 mt-[15px] w-[30%] md:w-full">
                    <a href='/' className="ml-[54px] text-base text-light_blue-A700">Home</a>
                    <a href='/' className="ml-[54px] text-base text-light_blue-A700">About</a>
                    <a href='/' className="ml-[54px] text-base text-light_blue-A700">Services</a>
                    <a href='/' className="ml-[54px] text-base text-light_blue-A700">News</a>
                  </div>

                  <Button
                    className="cursor-pointer font-bold leading-[normal] mb-2 min-w-[170px] ml-20 md:ml-[0] text-base text-center"
                    shape="round"
                  >
                    Contact
                  </Button>

                </div>

                {/* --------- Hero Section -------- */}

                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                      size="txtSourceSansProBold24"
                    >
                      Welcome to MediCare+ Clinic
                    </Text>
                    <Text
                      className="mt-8 md:text-5xl text-[64px] text-indigo-900"
                      size="txtSourceSansProBold64"
                    >
                      Best Specialists
                    </Text>
                    <Text
                      className="leading-[39.00px] mt-[15px] text-teal-900 text-xl w-full"
                      size="txtSourceSansProRegular20"
                    >
                      We are on the leading edge of cancer care. Providing the
                      full continuum of cancer treatments and supportive care
                      services in a single convenient location.
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-between mt-11 w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[259px] rounded-[30px] text-base text-center"
                        size="sm"
                      >
                        Make an Appointment
                      </Button>

                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[259px] rounded-[30px] text-base text-center"
                        color="white_A700"
                        size="sm"
                      >
                        Departments
                      </Button>

                    </div>
                  </div>
                  <Img
                    className="h-[672px]"
                    src="images/img_group29.svg"
                    alt="groupTwentyNine"
                  />
                </div>
              </div>
            </div>


            {/* --------- Services ------- */}

            <Text
              className="mt-[51px] sm:text-[40px] md:text-[46px] text-[54px] text-center text-indigo-900"
              size="txtSourceSansProSemiBold54"
            >
              Our Services
            </Text>
            <Text
              className="leading-[39.00px] mt-[38px] text-center text-teal-900 text-xl w-[38%] sm:w-full"
              size="txtSourceSansProRegular20"
            >
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </Text>
            <div className="flex md:flex-col flex-row gap-9 items-start justify-start max-w-[1200px] mt-[69px] mx-auto md:px-5 w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[55px] items-end justify-start mb-[50px] p-[34px] sm:px-5 rounded-[20px] shadow-bs w-[23%] md:w-full">
                <Img
                  className="h-32 mt-1.5"
                  src="images/img_tooth.svg"
                  alt="tooth"
                />
                <Text
                  className="mb-[34px] mr-[82px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                  size="txtSourceSansProBold24"
                >
                  Dental Care
                </Text>
              </div>
              <div className="bg-light_blue-A700_03 flex md:flex-1 flex-col items-center justify-start p-[34px] sm:px-5 rounded-[20px] shadow-bs1 w-[23%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-16 justify-start my-3 w-[96%] md:w-full">
                  <Img
                    className="h-[115px] ml-1.5 md:ml-[0]"
                    src="images/img_lungs1.svg"
                    alt="lungsOne"
                  />
                  <div className="flex flex-col gap-[47px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtSourceSansProBold24WhiteA700"
                    >
                      Pulmonary
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <a
                        href="/"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtSourceSansProSemiBold16">
                          LEARN MORE
                        </Text>
                      </a>
                      <Img
                        className="h-[15px] mt-[3px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[61px] items-end justify-start mb-[50px] p-[34px] sm:px-5 rounded-[20px] shadow-bs w-[23%] md:w-full">
                <Img
                  className="h-[122px] mt-2"
                  src="images/img_humanbrain.svg"
                  alt="humanbrain"
                />
                <Text
                  className="mb-8 mr-[70px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                  size="txtSourceSansProBold24"
                >
                  Neurological
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[54px] items-center justify-start mb-[50px] p-[34px] sm:px-5 rounded-[20px] shadow-bs w-[23%] md:w-full">
                <Img
                  className="h-32 mt-1.5"
                  src="images/img_medicalfile.svg"
                  alt="medicalfile"
                />
                <Text
                  className="mb-[35px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                  size="txtSourceSansProBold24"
                >
                  Prediatrics
                </Text>
              </div>
            </div>

            {/* -------- clinic with Inovative ---- */}
            <div
              className="bg-cover bg-no-repeat h-[1127px] md:h-[1459px] sm:h-[845px] mt-[166px] p-[120px] md:px-5 relative w-full"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <div className="absolute bottom-[15%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[84%]">
                <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[74%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-[190px] sm:text-[40px] md:text-[46px] text-[54px] text-indigo-900"
                          size="txtSourceSansProSemiBold54"
                        >
                          Clinic With Innovative
                        </Text>
                        <div className="bg-white-A700 flex flex-col items-start justify-end mb-[22px] p-[26px] sm:px-5 rounded-[20px] shadow-bs">
                          <Text
                            className="mb-[23px] mt-[129px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                            size="txtSourceSansProSemiBold24"
                          >
                            Qualified Doctors
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[39.00px] mt-[38px] text-teal-900 text-xl w-[62%] sm:w-full"
                        size="txtSourceSansProRegular20"
                      >
                        We provide the most full medical services, so every
                        person could heave the oppurtunity to receive
                        qualitative medical help.
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-11 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] mb-[200px] min-w-[186px] rounded-[30px] text-base text-center"
                          size="sm"
                        >
                          Learn More
                        </Button>
                        <div className="bg-white-A700 flex flex-col items-start justify-end sm:mt-0 mt-[18px] p-[26px] sm:px-5 rounded-[20px] shadow-bs">
                          <Text
                            className="mb-6 mt-[134px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                            size="txtSourceSansProSemiBold24"
                          >
                            24 Hours Service
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start mb-[236px] md:mt-0 mt-[201px] p-[26px] sm:px-5 rounded-[20px] shadow-bs">
                    <Text
                      className="mb-[21px] mt-[137px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                      size="txtSourceSansProSemiBold24"
                    >
                      Emergency Care
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[232px] right-[32%] top-[15%] w-[232px]"
                src="images/img_doctorwoman.svg"
                alt="doctorwoman"
              />
              <Img
                className="absolute h-[232px] right-[10%] top-[33%] w-[232px]"
                src="images/img_doctorwomancopy.svg"
                alt="doctorwomancopy"
              />
              <Img
                className="absolute bottom-1/4 h-[232px] right-[32%] w-[232px]"
                src="images/img_doctorwomancopy_indigo_100.svg"
                alt="doctorwomancopy_One"
              />
            </div>
            <div className="md:h-[1174px] sm:h-[2136px] h-[955px] md:px-5 relative w-full">
              <div className="bg-gray-50 flex flex-col h-full items-end justify-start m-auto pb-[700px] md:pl-10 sm:pl-5 pl-[700px] w-full">
                <Img
                  className="h-[255px] md:h-auto object-cover w-[36%]"
                  src="images/img_ovalcopy2.png"
                  alt="ovalcopyTwo"
                />
              </div>

              {/*------ Best Specialist -------*/}
              <div className="absolute bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[84%]">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-indigo-900"
                  size="txtSourceSansProSemiBold54"
                >
                  We Have The Best Specialist
                </Text>
                <Text
                  className="leading-[39.00px] mt-[33px] text-center text-teal-900 text-xl w-[46%] sm:w-full"
                  size="txtSourceSansProRegular20"
                >
                  We have a wide experience in experience design and strategy,
                  with locally-rooted knowledge.
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[68px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 justify-start pb-[33px] rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[324px] mt-0 rounded-tl-[20px] rounded-tr-[20px]"
                      src="images/img_bitmap.svg"
                      alt="bitmap"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[34px]">
                      <Text
                        className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                        size="txtSourceSansProBold24"
                      >
                        Dr. Awaatif Al
                      </Text>
                      <Text
                        className="text-lg text-teal-900"
                        size="txtSourceSansProRegular18"
                      >
                        Dental Care
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-[27px] justify-start pb-[31px] rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[324px] rounded-tl-[20px] rounded-tr-[20px]"
                      src="images/img_bitmap.svg"
                      alt="bitmap"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[34px]">
                      <Text
                        className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                        size="txtSourceSansProBold24"
                      >
                        Dr. Filipa Gaspar
                      </Text>
                      <Text
                        className="text-lg text-teal-900"
                        size="txtSourceSansProRegular18"
                      >
                        Cardiology
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-[25px] items-center justify-start pb-[31px] rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[324px] rounded-tl-[20px] rounded-tr-[20px]"
                      src="images/img_bitmap.svg"
                      alt="bitmap"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                        size="txtSourceSansProBold24"
                      >
                        Dr. Sukhmeet Gorae
                      </Text>
                      <Text
                        className="text-lg text-teal-900"
                        size="txtSourceSansProRegular18"
                      >
                        Neurological
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 justify-start pb-[33px] rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[324px] rounded-tl-[20px] rounded-tr-[20px]"
                      src="images/img_bitmap.svg"
                      alt="bitmap"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[34px]">
                      <Text
                        className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                        size="txtSourceSansProBold24"
                      >
                        Dr. Siri Jakobsson
                      </Text>
                      <Text
                        className="text-lg text-teal-900"
                        size="txtSourceSansProRegular18"
                      >
                        Prediatrics
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>

            {/*------ Customers Reviews------  */}
            <div className="bg-gray-50 flex flex-col items-center justify-end mt-[51px] p-20 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-11 items-start justify-start max-w-[1221px] mt-2.5 mx-auto w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-indigo-900"
                  size="txtSourceSansProSemiBold54"
                >
                  What Our Customers Say
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[27px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[292px] h-[317px] relative w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[47px] md:px-10 sm:px-5 rounded-[20px] shadow-bs w-[97%]">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[92%] md:w-full">
                        <Text
                          className="leading-[39.00px] text-teal-900 text-xl w-full"
                          size="txtSourceSansProRegular20"
                        >
                          I wanted to thanks everyone at this facility for the
                          quality of care and compassion they showed during my
                          stay.
                        </Text>
                        <div className="flex flex-row gap-[22px] items-start justify-start w-3/5 md:w-full">
                          <Img
                            className="h-[59px] md:h-auto mb-[3px] rounded-[50%] w-[59px]"
                            src="images/img_oval.png"
                            alt="oval"
                          />
                          <div className="flex flex-col items-start justify-start mt-[3px]">
                            <Text
                              className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                              size="txtSourceSansProSemiBold24"
                            >
                              Jacqueline Asong
                            </Text>
                            <Text
                              className="mt-1 text-lg text-teal-900"
                              size="txtSourceSansProRegular18"
                            >
                              Patient
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute font-helvetica md:h-[83px] h-[89px] pb-[5px] right-[0] top-[0] w-[15%]">
                      <div className="bg-light_blue-A700_01 h-[83px] mx-auto rounded-[41px] w-[83px]"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[45.11px] md:text-[51.11px] text-[59.11px] text-white-A700 top-[0] w-max"
                        size="txtHelvetica5911"
                      >
                        “
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[291px] h-[317px] relative w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[47px] md:px-10 sm:px-5 rounded-[20px] shadow-bs w-[97%]">
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[92%] md:w-full">
                        <Text
                          className="leading-[39.00px] text-teal-900 text-xl w-full"
                          size="txtSourceSansProRegular20"
                        >
                          I wanted to thanks everyone at this facility for the
                          quality of care and compassion they showed during my
                          stay.
                        </Text>
                        <div className="flex flex-row gap-[22px] items-start justify-start w-[55%] md:w-full">
                          <Img
                            className="h-[59px] md:h-auto rounded-[50%] w-[59px]"
                            src="images/img_oval_59x59.png"
                            alt="oval"
                          />
                          <div className="flex flex-col gap-2 items-start justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                              size="txtSourceSansProSemiBold24"
                            >
                              Patrícia Ribeiro
                            </Text>
                            <Text
                              className="text-lg text-teal-900"
                              size="txtSourceSansProRegular18"
                            >
                              Patient
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute font-helvetica md:h-[83px] h-[89px] pb-[5px] right-[0] top-[0] w-[15%]">
                      <div className="bg-light_blue-A700_01 h-[83px] mx-auto rounded-[41px] w-[83px]"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[45.11px] md:text-[51.11px] text-[59.11px] text-white-A700 top-[0] w-max"
                        size="txtHelvetica5911"
                      >
                        “
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>

            {/* ------------ News-Letter----------- */}

            <div className="h-[700px] md:h-[736px] mt-[38px] md:px-5 relative w-full">
              <div className="md:h-[698px] h-[700px] m-auto w-full">
                <div className="absolute bg-gray-50 h-[698px] inset-[0] justify-center m-auto w-full"></div>
                <div className="absolute border-[50px] border-solid border-white-A700 h-[301px] right-[1%] rounded-[150px] shadow-bs2 top-[0] w-[301px]"></div>
              </div>

              <div className="absolute  bg-light_blue-A700_01 flex flex-col h-max inset-[0] justify-center  m-auto p-[52px] md:px-10 sm:px-5 rounded-[20px] w-[84%]">
                <Text className="md:ml-[0] ml-[267px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtSourceSansProSemiBold48"
                >
                  Subscribe to Newsletter
                </Text>
                <Text
                  className="md:ml-[0] mx-auto mt-[29px] text-center text-white-A700 text-xl"
                  size="txtSourceSansProRegular20WhiteA700"
                >
                  We have a wide experience in experience design and strategy,
                </Text>


                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[52px] mt-[83px] mx-auto p-[22px] sm:px-5 rounded-[10px] w-[78%] md:w-full">
                  <input placeholder='Enter your email address'
                    className="ml-3.5 sm:ml-[0] text-gray-500 text-xl" />

                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[176px] rounded-[37px] text-base text-center"
                    size="md"
                  >
                    Send Now
                  </Button>
                </div>
              </div>
            </div>


            <div className="h-[385px] md:px-5 relative w-full">
              <div className="bg-gray-50_02 flex flex-col h-full items-center justify-end m-auto pt-36 w-full">
                <div className="bg-blue-50_01 h-[241px] w-full"></div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-[84%]">
                <div className="flex sm:flex-col flex-row font-sourcesanspro md:gap-10 items-start justify-between w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-light_blue-A700"
                    size="txtSourceSansProBold34"
                  >
                    <span className="text-light_blue-A700 font-sourcesanspro text-left font-bold">
                      Medi
                    </span>
                    <span className="text-deep_orange-300 font-sourcesanspro text-left font-bold">
                      Care+
                    </span>
                  </Text>
                  <div className="flex sm:flex-1 flex-row items-center justify-between w-[29%] sm:w-full">
                    <Text
                      className="text-base text-light_blue-A700"
                      size="txtSourceSansProBold16"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-base text-light_blue-A700"
                      size="txtSourceSansProRegular16"
                    >
                      About
                    </Text>
                    <Text
                      className="text-base text-light_blue-A700"
                      size="txtSourceSansProRegular16"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-base text-light_blue-A700"
                      size="txtSourceSansProRegular16"
                    >
                      News
                    </Text>
                  </div>
                </div>

                {/*---------- copy rights----- */}
                <div className="flex flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[3px] mt-[99px] w-[15%] md:w-full">
                  <Button
                    className="flex h-[51px] items-center justify-center w-[51px]"
                    shape="round"
                    color="gray_50_02"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>

                  <Button
                    className="flex h-[51px] items-center justify-center w-[51px]"
                    shape="round"
                    color="gray"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/google.svg"
                      alt="google"
                    />
                  </Button>
                  <Button
                    className="flex   h-[51px] items-center justify-center w-[51px]"
                    shape="round"
                    color="gray_50_02"
                  >
                    <Img src="images/twiter.svg" alt="twiter" />
                  </Button>
                </div>
                <Text
                  className="mt-6 text-blue_gray-500 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  ©2020 PodPayment - 2020
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HospitalLandingPage
