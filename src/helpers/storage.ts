import lifeInsuranceWhite from "../assets/images/download (2).svg";
import mediclaimWhite from "../assets/images/download (1).svg";
import vehicleInsuranceWhite from "../assets/images/download.svg";
import lifeInsuranceBrown from "../assets/images/download (6).svg";
import mediclaimBrown from "../assets/images/download (8).svg";
import vehicleInsuranceBrown from "../assets/images/download (7).svg";
export const svgSectionData = [{name:"Life Insurance",white:lifeInsuranceWhite,brown:lifeInsuranceBrown},{name:"Health Insurance",white:mediclaimWhite,brown:mediclaimBrown},{name:"Vehicle Insurance",white:vehicleInsuranceWhite,brown:vehicleInsuranceBrown}]

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  export const reviewData = [
  {
    description:
      "Lifeshades Insurance Company, owned by Dhaval Udani and Khushbu Udani, is exceptional! Their customer-centric approach, innovative solutions, and efficient claim handling make them a top-notch choice. Highly recommended!",
    reviewerName: "Johnny Doe",
    reviewerDesignation:"CEO Intas",
    src: "data:image/jpeg;base64,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"},
  {
    description:
    "Lifeshades Insurance: Simple, powerful, and secure. Dhaval and Khushbu Udani's prose of protection leaves no room for worries.",
    reviewerName: "Johnny Doe",
    reviewerDesignation:"CFO Krunal Industries",
    src: "data:image/jpeg;base64,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",
  },
  {
    description:
      "Lifeshades Insurance, helmed by the visionary duo Dhaval Udani and Khushbu Udani, is an absolute gem! Their expertise shines through in every aspect of their service. A literary masterpiece in the world of insurance!",
    reviewerName: "Johnny Doe",
    reviewerDesignation:"CFO Infosys",
    src: "data:image/jpeg;base64,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",
  },
  {
    description:
      "Lifeshades Insurance Company, owned by Dhaval Udani and Khushbu Udani, is exceptional! Their customer-centric approach, innovative solutions, and efficient claim handling make them a top-notch choice. Highly recommended!",
    reviewerName: "Johnny Doe",
     reviewerDesignation:"MD Cadila Pharma",
    src: "data:image/jpeg;base64,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",
  },
];