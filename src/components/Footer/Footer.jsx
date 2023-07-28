import React from "react";
import "./Footer.css";
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className="footer-wrapper" id="contact">
      <div className="footer-left">
        <img className="logos" src={logo} alt="" />
        <p>
          This is all some random text. This is an about us section. Write about
          the company industry. This is all some random text.
        </p>
        <div className="footer-social-media-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 33"
            fill="none"
            className="footer-social-media"
          >
            <path d="M11.4529 18.9541H15.5432L17.1793 12.4096H11.4529V9.13735C11.4529 7.45214 11.4529 5.8651 14.7251 5.8651H17.1793V0.367729C16.6459 0.297376 14.6318 0.138672 12.5049 0.138672C8.06281 0.138672 4.90837 2.84973 4.90837 7.82845V12.4096H0V18.9541H4.90837V32.8611H11.4529V18.9541Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-social-media"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path d="M30.5381 7.70555C25.6297 0.138422 15.6084 -2.11126 7.83675 2.59263C0.269622 7.29651 -2.18458 17.5224 2.72383 25.0895L3.13286 25.703L1.49672 31.8385L7.63223 30.2024L8.24578 30.6114C10.9045 32.0431 13.7677 32.8611 16.631 32.8611C19.6987 32.8611 22.7665 32.0431 25.4252 30.4069C32.9923 25.4985 35.242 15.4772 30.5381 7.70555ZM26.2433 23.4534C25.4252 24.6805 24.4026 25.4985 22.971 25.703C22.1529 25.703 21.1303 26.1121 17.04 24.4759C13.5632 22.8398 10.7 20.1811 8.65482 17.1133C7.42771 15.6817 6.81416 13.8411 6.60965 12.0004C6.60965 10.3643 7.2232 8.93265 8.24578 7.91007C8.65482 7.50103 9.06385 7.29651 9.47288 7.29651H10.4955C10.9045 7.29651 11.3135 7.29651 11.5181 8.11458C11.9271 9.13717 12.9497 11.5914 12.9497 11.7959C13.1542 12.0004 13.1542 12.4094 12.9497 12.614C13.1542 13.023 12.9497 13.432 12.7452 13.6365C12.5406 13.8411 12.3361 14.2501 12.1316 14.4546C11.7226 14.6591 11.5181 15.0682 11.7226 15.4772C12.5406 16.7043 13.5632 17.9314 14.5858 18.954C15.8129 19.9766 17.04 20.7946 18.4716 21.4082C18.8807 21.6127 19.2897 21.6127 19.4942 21.2037C19.6987 20.7946 20.7213 19.772 21.1303 19.363C21.5394 18.954 21.7439 18.954 22.1529 19.1585L25.4252 20.7946C25.8342 20.9991 26.2433 21.2037 26.4478 21.4082C26.6523 22.0217 26.6523 22.8398 26.2433 23.4534Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-social-media"
            viewBox="0 0 34 33"
            fill="none"
          >
            <path d="M17.349 11.0446C14.3448 11.0446 11.8931 13.4963 11.8931 16.5006C11.8931 19.5048 14.3448 21.9565 17.349 21.9565C20.3533 21.9565 22.805 19.5048 22.805 16.5006C22.805 13.4963 20.3533 11.0446 17.349 11.0446ZM33.7128 16.5006C33.7128 14.2412 33.7333 12.0024 33.6064 9.74713C33.4795 7.12761 32.8819 4.80279 30.9664 2.88727C29.0468 0.967651 26.7261 0.374167 24.1066 0.247284C21.8472 0.120401 19.6084 0.140866 17.3531 0.140866C15.0938 0.140866 12.8549 0.120401 10.5997 0.247284C7.98015 0.374167 5.65533 0.971744 3.73981 2.88727C1.82019 4.80688 1.22671 7.12761 1.09982 9.74713C0.97294 12.0065 0.993405 14.2453 0.993405 16.5006C0.993405 18.7558 0.97294 20.9988 1.09982 23.254C1.22671 25.8735 1.82428 28.1984 3.73981 30.1139C5.65942 32.0335 7.98015 32.627 10.5997 32.7539C12.859 32.8807 15.0979 32.8603 17.3531 32.8603C19.6124 32.8603 21.8513 32.8807 24.1066 32.7539C26.7261 32.627 29.0509 32.0294 30.9664 30.1139C32.886 28.1943 33.4795 25.8735 33.6064 23.254C33.7374 20.9988 33.7128 18.7599 33.7128 16.5006ZM17.349 24.8953C12.7035 24.8953 8.95428 21.1461 8.95428 16.5006C8.95428 11.855 12.7035 8.10584 17.349 8.10584C21.9946 8.10584 25.7438 11.855 25.7438 16.5006C25.7438 21.1461 21.9946 24.8953 17.349 24.8953ZM26.0876 9.72257C25.0029 9.72257 24.127 8.84667 24.127 7.76203C24.127 6.67738 25.0029 5.80148 26.0876 5.80148C27.1722 5.80148 28.0481 6.67738 28.0481 7.76203C28.0484 8.01958 27.9979 8.27466 27.8995 8.51268C27.8011 8.75069 27.6567 8.96694 27.4746 9.14906C27.2925 9.33118 27.0762 9.47558 26.8382 9.57399C26.6002 9.6724 26.3451 9.72289 26.0876 9.72257Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-social-media"
            viewBox="0 0 34 33"
            fill="none"
          >
            <path d="M29.8015 0.138672C30.7658 0.138672 31.6905 0.521731 32.3724 1.20358C33.0542 1.88543 33.4373 2.81022 33.4373 3.7745V29.2253C33.4373 30.1896 33.0542 31.1144 32.3724 31.7962C31.6905 32.4781 30.7658 32.8611 29.8015 32.8611H4.35067C3.38639 32.8611 2.4616 32.4781 1.77975 31.7962C1.0979 31.1144 0.714844 30.1896 0.714844 29.2253V3.7745C0.714844 2.81022 1.0979 1.88543 1.77975 1.20358C2.4616 0.521731 3.38639 0.138672 4.35067 0.138672H29.8015ZM28.8925 28.3163V18.6814C28.8925 17.1096 28.2681 15.6022 27.1567 14.4908C26.0453 13.3794 24.5379 12.755 22.9661 12.755C21.4209 12.755 19.6212 13.7003 18.7486 15.1183V13.1004H13.6766V28.3163H18.7486V19.354C18.7486 17.9542 19.8757 16.8089 21.2755 16.8089C21.9505 16.8089 22.5978 17.0771 23.0751 17.5544C23.5524 18.0317 23.8205 18.679 23.8205 19.354V28.3163H28.8925ZM7.76835 10.2463C8.57835 10.2463 9.35517 9.92451 9.92792 9.35175C10.5007 8.779 10.8224 8.00218 10.8224 7.19218C10.8224 5.50152 9.45901 4.1199 7.76835 4.1199C6.95353 4.1199 6.17209 4.44359 5.59592 5.01975C5.01976 5.59592 4.69608 6.37736 4.69608 7.19218C4.69608 8.88284 6.07769 10.2463 7.76835 10.2463ZM10.2953 28.3163V13.1004H5.25963V28.3163H10.2953Z" />
          </svg>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-content-div">
          <h3>Quick Links</h3>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Disclaimer</p>
            <p>Find us!</p>
          </div>
        </div>
        <div className="footer-content-div">
          <h3>Office</h3>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"25px"}
              height="25"
              viewBox="0 0 13 16"
              fill="none"
            >
              <path
                d="M6.5 8.15287C6.94688 8.15287 7.32956 7.99307 7.64806 7.67348C7.96656 7.35389 8.12554 6.97016 8.125 6.52229C8.125 6.07389 7.96575 5.68989 7.64725 5.37029C7.32875 5.0507 6.94633 4.89118 6.5 4.89172C6.05312 4.89172 5.67044 5.05152 5.35194 5.37111C5.03344 5.6907 4.87446 6.07443 4.875 6.52229C4.875 6.9707 5.03425 7.3547 5.35275 7.67429C5.67125 7.99389 6.05367 8.15341 6.5 8.15287ZM6.5 16C6.39167 16 6.28333 15.9796 6.175 15.9389C6.06667 15.8981 5.97188 15.8437 5.89062 15.7758C3.91354 14.0229 2.4375 12.3956 1.4625 10.8939C0.4875 9.3921 0 7.98927 0 6.68535C0 4.64713 0.653521 3.02335 1.96056 1.81401C3.2676 0.604671 4.78075 0 6.5 0C8.21979 0 9.73321 0.604671 11.0402 1.81401C12.3473 3.02335 13.0005 4.64713 13 6.68535C13 7.98981 12.5125 9.39292 11.5375 10.8947C10.5625 12.3964 9.08646 14.0235 7.10938 15.7758C7.02812 15.8437 6.93333 15.8981 6.825 15.9389C6.71667 15.9796 6.60833 16 6.5 16Z"
                fill="#F48A01"
              />
            </svg>
            <p>Aloor, Vellanchira P.O, Thrissur Dist, Kerala, India 680 697</p>
          </div>
        </div>
        <div className="footer-content-div">
          <h3>Contact</h3>
          <div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.6217 1.11425C9.64343 1.03303 9.68094 0.956879 9.73211 0.890159C9.78327 0.82344 9.84708 0.767456 9.91989 0.725406C9.99269 0.683355 10.0731 0.656063 10.1564 0.645088C10.2398 0.634114 10.3245 0.639672 10.4057 0.661444C11.5922 0.971006 12.6747 1.59125 13.5417 2.45829C14.4088 3.32533 15.029 4.40783 15.3386 5.59429C15.3603 5.6755 15.3659 5.76021 15.3549 5.84357C15.3439 5.92693 15.3166 6.00731 15.2746 6.08011C15.2325 6.15292 15.1766 6.21673 15.1098 6.2679C15.0431 6.31906 14.967 6.35658 14.8858 6.3783C14.8317 6.3925 14.776 6.39976 14.7202 6.3999C14.5792 6.39994 14.4422 6.35347 14.3304 6.26769C14.2186 6.18191 14.1382 6.06162 14.1017 5.9255C13.8494 4.9568 13.3432 4.07293 12.6355 3.36503C11.9277 2.65712 11.044 2.1508 10.0753 1.89826C9.99401 1.87662 9.91778 1.83916 9.85097 1.78804C9.78416 1.73691 9.72809 1.67311 9.68596 1.6003C9.64383 1.52748 9.61647 1.44707 9.60544 1.36367C9.59442 1.28027 9.59994 1.19551 9.6217 1.11425ZM9.4353 4.45828C10.5385 4.75268 11.2473 5.46229 11.5417 6.5655C11.5782 6.70163 11.6586 6.82192 11.7704 6.9077C11.8822 6.99348 12.0192 7.03995 12.1601 7.03991C12.216 7.03976 12.2717 7.03251 12.3257 7.01831C12.407 6.99658 12.4831 6.95906 12.5498 6.9079C12.6165 6.85674 12.6725 6.79293 12.7146 6.72012C12.7566 6.64731 12.7839 6.56693 12.7949 6.48357C12.8059 6.40021 12.8003 6.31551 12.7785 6.2343C12.3689 4.70148 11.2985 3.63107 9.7657 3.22147C9.68449 3.19977 9.5998 3.19429 9.51647 3.20532C9.43314 3.21636 9.3528 3.2437 9.28004 3.28578C9.20727 3.32786 9.14351 3.38387 9.09239 3.4506C9.04127 3.51732 9.00379 3.59346 8.98209 3.67467C8.9604 3.75588 8.95491 3.84057 8.96595 3.9239C8.97698 4.00723 9.00432 4.08757 9.04641 4.16034C9.08849 4.2331 9.1445 4.29687 9.21122 4.34799C9.27795 4.39911 9.35409 4.43659 9.4353 4.45828ZM15.2298 10.7567L11.4609 9.06793L11.4505 9.06313C11.2549 8.97944 11.0414 8.94586 10.8295 8.96541C10.6176 8.98497 10.4139 9.05705 10.2369 9.17513C10.2161 9.18889 10.196 9.20385 10.1769 9.21993L8.22969 10.8799C6.99608 10.2807 5.72246 9.01673 5.12326 7.79911L6.78567 5.82229C6.80167 5.80229 6.81687 5.78229 6.83127 5.76069C6.94682 5.58413 7.01692 5.38175 7.03534 5.17155C7.05377 4.96135 7.01994 4.74985 6.93687 4.55588V4.54628L5.24326 0.771045C5.13345 0.517655 4.94464 0.306573 4.705 0.169311C4.46537 0.0320479 4.18777 -0.0240334 3.91365 0.0094382C2.82961 0.152085 1.83457 0.684459 1.11436 1.50713C0.394161 2.3298 -0.00195276 3.3865 7.23898e-06 4.47988C7.23898e-06 10.8319 5.16806 16 11.5201 16C12.6135 16.002 13.6702 15.6058 14.4929 14.8856C15.3155 14.1654 15.8479 13.1704 15.9906 12.0864C16.0241 11.8123 15.9681 11.5348 15.831 11.2952C15.6939 11.0556 15.483 10.8667 15.2298 10.7567Z"
                  fill="#F48A01"
                />
              </svg>
              <div>
                <a href="">0480 2786655</a>
                <br></br>
                <a href="">+91 9349165966</a>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 13"
                fill="none"
              >
                <path
                  d="M1.6 12.8C1.16 12.8 0.783201 12.6432 0.469601 12.3296C0.156001 12.016 -0.000531975 11.6395 1.35823e-06 11.2V1.6C1.35823e-06 1.16 0.156801 0.783201 0.470401 0.469601C0.784001 0.156001 1.16053 -0.000531975 1.6 1.35823e-06H14.4C14.84 1.35823e-06 15.2168 0.156801 15.5304 0.470401C15.844 0.784001 16.0005 1.16053 16 1.6V11.2C16 11.64 15.8432 12.0168 15.5296 12.3304C15.216 12.644 14.8395 12.8005 14.4 12.8H1.6ZM8 7.06C8.06667 7.06 8.1368 7.04987 8.2104 7.0296C8.284 7.00933 8.35387 6.97947 8.42 6.94L14.08 3.4C14.1867 3.33333 14.2667 3.24987 14.32 3.1496C14.3733 3.04933 14.4 2.93947 14.4 2.82C14.4 2.55333 14.2867 2.35333 14.06 2.22C13.8333 2.08667 13.6 2.09333 13.36 2.24L8 5.6L2.64 2.24C2.4 2.09333 2.16667 2.09013 1.94 2.2304C1.71333 2.37067 1.6 2.5672 1.6 2.82C1.6 2.95333 1.62667 3.07013 1.68 3.1704C1.73333 3.27067 1.81333 3.3472 1.92 3.4L7.58 6.94C7.64667 6.98 7.7168 7.01013 7.7904 7.0304C7.864 7.05067 7.93387 7.06053 8 7.06Z"
                  fill="#F48A01"
                />
              </svg>
              <a href="mailto:sales@sarastechno.com">sales@sarastechno.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
