export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface LegalPolicy {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const LEGAL_POLICIES: Record<string, LegalPolicy> = {
  "refund-policy": {
    "slug": "refund-policy",
    "title": "Refund Policy",
    "description": "Our policy regarding refund eligibility, processing times, and conditions.",
    "lastUpdated": "Last updated:  11/01/2026",
    "sections": [
      {
        "id": "overview",
        "heading": "Overview",
        "paragraphs": [
          "Thank you for choosing our services. We\u2019re committed to ensuring your satisfaction, which is why we offer a refund policy under the following terms."
        ]
      },
      {
        "id": "refund-eligibility-period",
        "heading": "Refund Eligibility Period:",
        "paragraphs": [
          "You are eligible to request a refund within 7 business days of your initial onboarding date. This period is calculated from the date of your service activation as recorded in our systems."
        ]
      },
      {
        "id": "refundable-amount",
        "heading": "Refundable Amount:",
        "paragraphs": [
          "If you are not satisfied with our product/service, you may be eligible for upto 50% refund based on your case assessment."
        ]
      },
      {
        "id": "requesting-a-refund",
        "heading": "Requesting a Refund:",
        "paragraphs": [
          "To initiate a refund request, please contact our customer service at support@cocoonmail.com\u201d. You will have to provide your order details and the reason for the refund request. Our team will guide you through the process."
        ]
      },
      {
        "id": "processing-time",
        "heading": "Processing Time:",
        "paragraphs": [
          "Once your refund request is received and approved, please allow up to 7 business days for the processing of your refund. The refund will be credited to the original payment method used at the time of purchase within 7 business days."
        ]
      },
      {
        "id": "non-refundable-services",
        "heading": "Non-Refundable Services:",
        "paragraphs": [
          "Please note that certain services may be non-refundable as specified at the time of purchase mentioned in order form. In such cases, our refund policy does not apply."
        ]
      },
      {
        "id": "modifications-to-the-refund-policy",
        "heading": "Modifications to the Refund Policy:",
        "paragraphs": [
          "We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting the revised policy on our website.",
          "By purchasing our services, you acknowledge that you have read, understood, and agreed to be bound by this refund policy. This refund policy is subject to change and does not constitute a contract or warranty. We are not liable for any damages or losses resulting from the return or refund process. If you have any questions or concerns about our refund policy, please do not hesitate to contact us. Contact us on support@cocoonmail.com"
        ]
      }
    ]
  },
  "terms-of-service": {
    "slug": "terms-of-service",
    "title": "Terms of Service",
    "description": "The terms and conditions governing your use of Cocoonmail services and platforms.",
    "lastUpdated": "Last updated:  11/01/2026",
    "sections": [
      {
        "id": "1-introduction",
        "heading": "1. Introduction",
        "paragraphs": [
          "Welcome to Cocoonmail (\"Company\", \"we\", \"our\", \"us\")!",
          "These Terms of Service (\" Terms \", \" Terms of Service \") govern your use of our web pages, application and email services (\" Services \"), located at https://cocoonmail.com and operated by the Company.",
          "Our privacy policy also governs your use of our Services and explains how we collect, safeguard and disclose information that results from your use of our web pages (\" Privacy Policy \"). Please read it here .",
          "Your agreement with us includes these Terms and our Privacy Policy (\" Agreements \"). You acknowledge that you have read and understood the Agreements, and agree to be bound by them.",
          "If you do not agree with (or cannot comply with) the Agreements, then you may not use the Services, but please let us know by emailing us at info@cocoonmail.com so we can try to find a solution. These Agreements apply to all website visitors, users and others who wish to access or use our Services."
        ]
      },
      {
        "id": "2-access-to-services-and-communications",
        "heading": "2. Access to Services and Communications",
        "paragraphs": [
          "By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at info@cocoonmail.com ."
        ]
      },
      {
        "id": "3-purchases",
        "heading": "3. Purchases",
        "paragraphs": [
          "If you wish to purchase any product or service made available through Service (\" Purchase \"), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.",
          "You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.",
          "We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.",
          "We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.",
          "We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected."
        ]
      },
      {
        "id": "4-subscriptions-and-cancellation",
        "heading": "4. Subscriptions and Cancellation",
        "paragraphs": [
          "Some of our Services are billed on a subscription basis (\" Subscription \"). You will be billed in advance on a recurring and periodic basis (\" Billing Cycle \") and you will prepay fees for such a Billing Cycle pursuant to an order form hosted by an authorized third-party on our behalf (\" Order Form \"). Billing Cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription, and they will be specified on your Order Form.",
          "At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or the Company cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting info@cocoonmail.com customer support team.",
          "You may choose to cancel your Subscription early at your convenience, however, we will not provide any refunds of prepaid or unused portion of the Services, and you will pay all unpaid fee due through the end of the applicable Subscription term.",
          "A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide the Company with accurate and complete billing information, including full name, address, state, zip code, telephone number, and valid payment method information. By submitting such payment information, you automatically authorize the Company to charge all Subscription fees incurred through your Account to any such payment instruments.",
          "Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice."
        ]
      },
      {
        "id": "5-free-trial",
        "heading": "5. Free Trial",
        "paragraphs": [
          "The Company offers a subscription with a free trial for a limited period of time (\"Free Trial\").",
          "You are not required to enter your billing information and card details when signing up for a free trial, you will not be charged by Us until you decide and opt for a paid subscription during or post-trial period. On the last day of the free trial period, unless you opt for a paid subscription, your account will be automatically canceled.",
          "At any time and without notice, The Company reserves the right to ( i ) modify the terms of service of a free trial offer, or ( ii ) cancel such free trial offer."
        ]
      },
      {
        "id": "6-fee-changes",
        "heading": "6. Fee Changes",
        "paragraphs": [
          "The Company, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.",
          "The Company will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.",
          "Your continued use of our Services after a Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount."
        ]
      },
      {
        "id": "7-refunds",
        "heading": "7. Refunds",
        "paragraphs": [
          "No refunds (partial/full) will be issued in case the subscription has started. You can cancel your subscription before the subscription&#x27;s end date to avoid any further charges.",
          "Our Annual commitment plan offer a lower monthly payment than our month-to-month plans in exchange for a committed period to our service. Customers needing to cancel the committed plan early may be charged a cancellation fee. The fee amount varies since it is based on the total amount of savings you received so far at the discounted price.",
          "Here is the formula we use to calculate the fee:"
        ]
      },
      {
        "id": "8-your-data",
        "heading": "8. Your Data",
        "paragraphs": [
          "You own and retain all rights to your data. You grant permission to us and our licensors to use your data only as necessary to provide the Services to you and as otherwise permitted by these Terms. We may collect information and data about you and your users when you interact with our Services as permitted by these Terms. We may use your data in an anonymized or aggregated manner for machine learning to support and improve certain product features and functionality within the Services."
        ]
      },
      {
        "id": "9-content",
        "heading": "9. Content",
        "paragraphs": [
          "Our Services allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, photos, works of authorship, creative works , or other material (\" Content \"). You are responsible for Content that you post on or through our Services, including its legality, reliability, and appropriateness.",
          "By posting Content on or through our Services, you represent and warrant that: (i) Content is yours (you own it or license it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, without any obligation for us to obtain consent of any third-party and without creating any other obligation or liability for us, (ii) the Content is accurate and that the posting of your Content on or through our Services does not and will not violate the privacy rights, publicity rights, intellectual property right, contract rights, or any other rights of any person or entity, and (iii) your use of our Services complies with all and does not violate these Terms or any applicable laws, rules, or regulations, and will not cause injury or harm to any person. We reserve the right to terminate the Account of any user found to be in breach of the foregoing representations.",
          "a. License Grant of User Content to Company",
          "You retain any and all of your rights to any Content you submit, post or display on or through our Services and you are responsible for protecting those rights. We take no responsibility and assume no liability for the quality, safety, legality, truthfulness, or accuracy of any Content you or any third-party posts or tranbase its on or through our Services.",
          "By posting Content using our Services, you grant us the non-exclusive, unrestricted, unconditional, unlimited, worldwide, irrevocable, perpetual, and royalty-free right and license to use, modify, publicly perform, publicly display, disclose, reproduce, copy, tranbase it, distribute, and make derivative works of any and all portions of your Content for any purpose and in all formats, on and through our Services. You agree that this license includes the right for us to make your Content available to other users of our Services, who may also use your Content subject to these Terms. You further agree that the license includes the right to copy, analyze, and use any of your Content as the Company may deem necessary or desirable for purposes of debugging, testing, fraud, security, or providing support or development services in connection with the Service and future improvements to the Services.",
          "The Company has the right but not the obligation to monitor and edit any and all Content provided by users.",
          "In addition, Content found on or through our Services or Content that is provided to you in connection with the Services, including, but not limited to Content we create or license from third parties (\" Company Content \"), are the property of the Company or used with permission. You may not distribute, modify, tranbase it, reuse, download, repost, copy, or use Company Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.",
          "b. Infringement Notifications/DMCA Policy",
          "We respect the intellectual property rights of others and ask our users to do the same. If you believe that your intellectual property rights have been infringed through user Content, please submit a complaint through the procedures described in the DMCA Policy."
        ]
      },
      {
        "id": "10-acceptable-use-policy",
        "heading": "10. Acceptable Use Policy",
        "paragraphs": [
          "This acceptable use policy set forth below ( \" Acceptable Use Policy )\" applies to the use of any product, service or website provided by us, including the Services. By using our Services, you agree that you will comply with this Acceptable Use Policy.",
          "a. Prohibited Actions",
          "You may not use our Services in any way (directly or indirectly) to send, tranbase it, handle, distribute or deliver spam or unsolicited bulk emails in violation of the CAN-SPAM Act, the Canada&#x27;s Anti-Spam Legislation, GDPR (all as defined below) or any other applicable law or regulation. You agree that you will only send targeted, permission-based messages (including emails, text messages and other notifications) using our Service. Purchased lists may not be used with the Services, regardless of the source or permission status.",
          "All recipients must have registered with your software product, have otherwise explicitly engaged with your software, signed up for your marketing email list, or engaged in a business relationship with you. The recipients must have explicitly provided their email address for such purpose.",
          "You agree to use our Service only in compliance with these Terms and all applicable laws, including but not limited to the CAN-SPAM Act of 2003 (as defined below), Canada&#x27;s Anti-Spam Legislation (as defined below), California Consumer Privacy Act, the European Union&#x27;s General Data Protection Regulation 2016/679 ( \" GDPR \"), regulations imposed by the Federal Trade Commission, and such other policies and laws related to unsolicited emails, spamming, privacy, obscenity, or defamation, copyright and trademark infringement and email address registry laws, as applicable.",
          "In your use of the Services, you shall represent yourself or your organization accurately and will not impersonate any other person, whether actual or fictitious. You agree that you are the sole or designated \"sender\" (as such term is defined in the United States CAN-SPAM Act of 2003 and any rules or regulations adopted under such act (the \" CAN-SPAM Act \")) of any message sent by you using the Services. Similarly, for messages sent to Canadian email accounts, you are the sole person sending or causing or permitting the message to be sent by you using the Services (within the meaning of Canada&#x27;s Anti-Spam Legislation, S.C. 2010, c. 23 (\" Canada&#x27;s Anti-Spam Legislation \")).",
          "The Services are not designed to comply with industry-specific regulation such the Health Insurance Portability and Accountability Act (HIPAA) or the Federal Information Security Management Act (FIbase A). You may not use the Services where your communications would be subject to such laws or in a way that would violate the Gramm-Leach-Bliley Act (GLBA).",
          "You further agree that for any email message sent by you using the Services, (i) the \"from\" line of any email message sent by you using the Services will accurately and in a non-deceptive manner identify your organization, your product or your service, and (ii) the \"subject\" line of any email message sent by you using the Services will not contain any deceptive or misleading content regarding the overall subject matter of the email message. Every email message sent using the Services must contain an \"unsubscribe\" link that allows the recipient to remove themselves from your mailing list. You shall monitor and promptly process unsubscribe requests received by you.",
          "b. Proper Usage of our Service",
          "We believe in strict ethical norms for end user communication. To ensure this, we reserve the right to immediately terminate access to our Service by any user at our sole discretion, should we suspect any such activity or unethical behaviour.",
          "You may use our Service only for lawful purposes and in accordance with these Terms. When using our Services, you agree not to:"
        ]
      },
      {
        "id": "11-analytics",
        "heading": "11. Analytics",
        "paragraphs": [
          "We may use third-party Service Providers to monitor and analyze the use of our Service."
        ]
      },
      {
        "id": "12-no-use-by-minors",
        "heading": "12. No Use By Minors",
        "paragraphs": [
          "Our Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of our Services, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this Agreement and abide by all of the Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of our Services."
        ]
      },
      {
        "id": "13-accounts",
        "heading": "13. Accounts",
        "paragraphs": [
          "When you create an Account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your Account or Subscription.",
          "You are responsible for maintaining the confidentiality of your Account and password, including but not limited to the restriction of access to your computer and/or Account. You agree to accept responsibility for any and all activities or actions that occur under your Account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your Account.",
          "You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.",
          "We reserve the right to refuse service, terminate Accounts, remove or edit Content, or cancel use of our Services and any Subscriptions in our sole discretion."
        ]
      },
      {
        "id": "14-intellectual-property",
        "heading": "14. Intellectual Property",
        "paragraphs": [
          "Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of the Company and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of the Company."
        ]
      },
      {
        "id": "15-copyright-policy",
        "heading": "15. Copyright Policy",
        "paragraphs": [
          "We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (\"Infringement\") of any person or entity.",
          "If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to info@cocoonmail.com, with the subject line: \"Copyright Infringement\" and include in your claim a detailed description of the alleged Infringement as detailed below, under \"DMCA Notice and Procedure for Copyright Infringement Claims\"",
          "You may be held accountable for damages (including costs and attorneys&#x27; fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright."
        ]
      },
      {
        "id": "16-error-reporting-and-feedback",
        "heading": "16. Error Reporting and Feedback",
        "paragraphs": [
          "You may provide us with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Services (\" Feedback \") directly at info@cocoonmail.com . You acknowledge and agree that: ( i ) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) the Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third-party; and (iv) the Company is not under any obligation of confidentiality with respect to the Feedback. You hereby grant the Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose."
        ]
      },
      {
        "id": "17-links-to-other-websites",
        "heading": "17. Links To Other Websites",
        "paragraphs": [
          "Our Services may contain links to third-party websites or services that are not owned or controlled by the Company.",
          "The Company has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.",
          "YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD-PARTY WEBSITES OR SERVICES.",
          "WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT."
        ]
      },
      {
        "id": "18-disclaimer-of-warranty",
        "heading": "18. Disclaimer Of Warranty",
        "paragraphs": [
          "THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF ITS SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THE CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.",
          "NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, SAFETY OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.",
          "THE COMPANY WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS, AND TAKES NO RESPONSIBILITY FOR YOUR USE OF THE SERVICES, INCLUDING BUT NOT LIMITED TO, ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ACTIONS OR OMISSIONS; (B) SERVER FAILURE OR DATA LOSS; (C) UNAUTHORIZED ACCESS TO THE SERVICE, YOUR ACCOUNT OR CONTENT; (D) ANY UNAUTHORIZED THIRD-PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING, BRUTE-FORCING OR OTHER MEANS OF ATTACK AGAINST THE SERVICE OR YOUR ACCOUNT.",
          "THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, TITLE AND FITNESS FOR PARTICULAR PURPOSE.",
          "The foregoing does not affect any warranties which cannot be excluded or limited under applicable law."
        ]
      },
      {
        "id": "19-limitation-of-liability",
        "heading": "19. Limitation Of Liability",
        "paragraphs": [
          "EXCEPT AS PROHIBITED BY LAW, IN NO EVENT WILL THE COMPANY BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS&#x27; FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR YOUR USE OF THE SERVICES, CONTENT OR THIRD-PARTY WEBSITES, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT OR YOUR USE OF THE SERVICES AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF THE COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
          "EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.",
          "SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU."
        ]
      },
      {
        "id": "20-indemnification",
        "heading": "20. Indemnification",
        "paragraphs": [
          "You agree to defend, indemnify and hold harmless Company and its respective vendors, affiliates and their officers, directors, representatives, employees, consultants, and agents (\" Company Parties \") from and against all actual or alleged third-party claims, damages, awards, judgments, losses, liabilities, obligations, penalties, interest, fees, expenses (including, without limitation, attorneys&#x27; fees and expenses) and costs (including, without limitation, court costs, costs of settlement and costs of pursuing indemnification and insurance), of every kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract or otherwise (collectively, \" Claims \"), including, but not limited to, damages to property or personal injury, that are caused by, arise out of or are related to (a) your use or misuse of the Services or Company Content therein, (b) any Feedback you provide, (c) your violation of these Terms, and (d) your violation of the rights of a third-party, including intellectual property rights, privacy rights and rights of publicity. You agree to promptly notify Company of any third-party Claims and cooperate with the Company Parties in defending such Claims. You further agree that the Company Parties shall have the right to participate in the defense of any such Claim, subject to your indemnification obligation."
        ]
      },
      {
        "id": "21-publicity",
        "heading": "21. Publicity",
        "paragraphs": [
          "You agree that we may, but have no obligation, to identify you as a customer or subscriber and that the Company may, in its sole discretion, refer to you by name, trade name, trademark, logo and other proprietary marks or words, and may describe your business, in our marketing or publicity materials, on our website, and in press releases or other public statements. You hereby grant the Company a nonexclusive, royalty-free, worldwide, fully-paid, and sub-licensable license to use your name and any of your trade names, trademarks, logos and other proprietary marks or words pursuant to this Section. You can opt-out of this use by requesting opt-out by sending an email to info@cocoonmail.com ."
        ]
      },
      {
        "id": "22-termination",
        "heading": "22. Termination",
        "paragraphs": [
          "We may terminate or suspend your Account and bar access to the free services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms.",
          "If you wish to terminate your Account, you may simply discontinue using the Services. However, we will not provide any refunds of prepaid or unused Subscription fees.",
          "We may also terminate or suspend your Account and prevent your access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation:",
          "All provisions of these Terms, which by their nature should survive termination, shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."
        ]
      },
      {
        "id": "23-governing-law-and-venue",
        "heading": "23. Governing Law and Venue",
        "paragraphs": [
          "These Terms shall be governed and construed in accordance with the laws of the United States of America, which governing law applies to agreement without regard to its conflict of law provisions.",
          "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service."
        ]
      },
      {
        "id": "24-severability",
        "heading": "24. Severability",
        "paragraphs": [
          "If any provision of these Terms is held to be invalid, illegal or unenforceable by a court or other tribunal of competent jurisdiction, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of these Terms will remain in full force and effect."
        ]
      },
      {
        "id": "25-entire-agreement",
        "heading": "25. Entire Agreement",
        "paragraphs": [
          "These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services. You may not assign any of your rights hereunder. We may assign all rights to any other individual or entity in our sole discretion."
        ]
      },
      {
        "id": "26-changes-to-service",
        "heading": "26. Changes To Service",
        "paragraphs": [
          "We reserve the right to withdraw, modify or amend our Services, and any service or material we provide via our Services, in our sole discretion without notice. We will not be liable if for any reason all or any part of our Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of our Services, or the entire Services, to users, including registered users."
        ]
      },
      {
        "id": "27-amendments-to-terms",
        "heading": "27. Amendments To Terms",
        "paragraphs": [
          "We may amend these Terms at any time by posting the amended terms on our website. As a courtesy, we may also notify you by sending any updates to the email associated with your Account. The revised version of the Terms will be effective at the time we post it on our website. Your continued use of the Services following the posting of amended or revised Terms means that you accept and agree to the changes in all respects. If you do not agree to the new terms, you may close your Account and stop using the Services."
        ]
      },
      {
        "id": "28-waiver",
        "heading": "28. Waiver",
        "paragraphs": [
          "No waiver by the Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision."
        ]
      },
      {
        "id": "29-acknowledgement",
        "heading": "29. Acknowledgement",
        "paragraphs": [
          "BY USING OUR SERVICES OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS, AS MAY BE AMENDED FROM TIME TO TIME, AND AGREE TO BE BOUND BY THEM."
        ]
      },
      {
        "id": "30-contact-us",
        "heading": "30. Contact Us",
        "paragraphs": [
          "Please send your Feedback, comments, requests for technical support by email to info@cocoonmail.com ."
        ]
      }
    ]
  },
  "privacy-policy": {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "description": "How Cocoonmail collects, processes, and protects your personal and operational data.",
    "lastUpdated": "Last Updated:  11/01/2026",
    "sections": [
      {
        "id": "1-scope-of-this-policy",
        "heading": "1. Scope of This Policy",
        "paragraphs": [
          "This Policy applies to:",
          "In most cases, Customers are the Data Controllers , and Inofinix acts as a Data Processor / Service Provider , processing Personal Data strictly on Customer instructions."
        ]
      },
      {
        "id": "2-information-we-collect",
        "heading": "2. Information We Collect",
        "paragraphs": []
      },
      {
        "id": "2-1-account-and-business-information",
        "heading": "2.1 Account and Business Information",
        "paragraphs": [
          "Name, email address, phone number Company and business details Login credentials Billing and payment information Customer support communications"
        ]
      },
      {
        "id": "2-2-email-marketing-data",
        "heading": "2.2 Email Marketing Data",
        "paragraphs": [
          "When Customers use Cocoonmail for email marketing, we may process:"
        ]
      },
      {
        "id": "2-3-whatsapp-business-integration-data",
        "heading": "2.3 WhatsApp Business Integration Data",
        "paragraphs": [
          "If a Customer connects WhatsApp Business using Meta\u2019s WhatsApp Cloud API (and in the future via our services as a WhatsApp Business Solution Provider), we may process:",
          "Message content, templates, and metadata are stored solely to provide the Service, support reporting, customer support, compliance, and troubleshooting."
        ]
      },
      {
        "id": "2-4-technical-and-usage-data",
        "heading": "2.4 Technical and Usage Data",
        "paragraphs": [
          "IP address Device, browser, and operating system information Log files and timestamps Cookies and similar technologies"
        ]
      },
      {
        "id": "3-how-we-use-information",
        "heading": "3. How We Use Information",
        "paragraphs": [
          "We do not use message content or contact data for our own advertising or marketing."
        ]
      },
      {
        "id": "4-legal-basis-for-processing",
        "heading": "4. Legal Basis for Processing",
        "paragraphs": [
          "Processing is based on:"
        ]
      },
      {
        "id": "5-whatsapp-meta-platform-compliance",
        "heading": "5. WhatsApp & Meta Platform Compliance",
        "paragraphs": [
          "WhatsApp Platform Data is processed strictly in accordance with Meta and WhatsApp Business Terms WhatsApp data is used only to provide the Service to the relevant Customer We do not sell, rent, or misuse WhatsApp data Data may be shared with Meta/WhatsApp as required for message delivery or compliance Customers are responsible for lawful use and End User consent"
        ]
      },
      {
        "id": "5-1-end-user-consent-for-whatsapp-communications",
        "heading": "5.1 End-User Consent for WhatsApp Communications",
        "paragraphs": [
          "Cocoonmail provides tools that enable its customers (\u201cCustomers\u201d) to send messages to end users via WhatsApp using the WhatsApp Business Platform. Customers are solely responsible for obtaining all necessary consents, permissions, and lawful authorizations from end users before initiating any WhatsApp communication, including business-initiated or marketing messages. Such consent must comply with applicable laws and WhatsApp policies and may include, where required, explicit opt-in mechanisms such as checkboxes, forms, or other affirmative user actions. Cocoonmail does not initiate WhatsApp messages to end users on its own behalf and acts solely as a service provider processing data on behalf of its Customers. End users may opt out of WhatsApp communications at any time using mechanisms provided by the Customer or as supported by the WhatsApp platform."
        ]
      },
      {
        "id": "5-2-retention-of-whatsapp-messaging-data",
        "heading": "5.2 Retention of WhatsApp Messaging Data",
        "paragraphs": [
          "WhatsApp messaging data processed through Cocoonmail, including phone numbers, message content, templates, and message metadata, is retained only for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, enforce agreements, or meet operational and audit requirements. Message content and metadata may be stored temporarily to enable message delivery, reporting, analytics, troubleshooting, and compliance with platform or legal requirements. Upon termination of the Customer\u2019s account or upon Customer request, such data will be deleted or anonymized within a reasonable period, unless retention is required by law or applicable platform policies."
        ]
      },
      {
        "id": "5-3-relationship-with-whatsapp-and-meta-platforms",
        "heading": "5.3 Relationship With WhatsApp and Meta Platforms",
        "paragraphs": [
          "For more information on how WhatsApp and Meta process personal data, please review WhatsApp&#x27;s Privacy Policy available on WhatsApp&#x27;s official website."
        ]
      },
      {
        "id": "6-data-sharing",
        "heading": "6. Data Sharing",
        "paragraphs": [
          "We may share data with:"
        ]
      },
      {
        "id": "7-international-data-transfers",
        "heading": "7. International Data Transfers",
        "paragraphs": [
          "Personal Data may be processed outside India. Where required, we apply lawful transfer mechanisms such as standard contractual clauses or equivalent safeguards."
        ]
      },
      {
        "id": "8-shopify-app-integration-privacy-policy",
        "heading": "8. Shopify App & Integration Privacy Policy",
        "paragraphs": []
      },
      {
        "id": "8-1-overview",
        "heading": "8.1 Overview",
        "paragraphs": [
          "When you install and use the Cocoonmail Shopify App (the \u201cApp\u201d), Cocoonmail processes certain data from your Shopify store to enable features such as abandoned cart recovery, order notifications, transactional messaging, marketing automation, and analytics. This section applies only to data accessed or processed via Shopify APIs."
        ]
      },
      {
        "id": "8-2-data-accessed-from-shopify",
        "heading": "8.2 Data Accessed from Shopify",
        "paragraphs": [
          "Based on permissions approved during installation, the App may access:"
        ]
      },
      {
        "id": "8-3-purpose-of-data-use",
        "heading": "8.3 Purpose of Data Use",
        "paragraphs": [
          "Shopify data is used strictly to:",
          "We do not use Shopify customer data for our own marketing purposes."
        ]
      },
      {
        "id": "8-4-legal-basis",
        "heading": "8.4 Legal Basis",
        "paragraphs": [
          "Processing of Shopify data is based on:"
        ]
      },
      {
        "id": "8-5-data-sharing",
        "heading": "8.5 Data Sharing",
        "paragraphs": [
          "Shopify data may be shared with:",
          "All subprocessors are bound by confidentiality and data protection obligations."
        ]
      },
      {
        "id": "8-6-data-retention-deletion",
        "heading": "8.6 Data Retention & Deletion",
        "paragraphs": [
          "Shopify data is retained only while your store is connected and the App is active Upon app uninstallation, data is deleted or anonymized within a reasonable timeframe unless legally required"
        ]
      },
      {
        "id": "8-7-merchant-responsibilities",
        "heading": "8.7 Merchant Responsibilities",
        "paragraphs": [
          "Merchants are responsible for:"
        ]
      },
      {
        "id": "9-data-retention",
        "heading": "9. Data Retention",
        "paragraphs": [
          "Data is retained only as long as necessary to provide the Service, comply with legal obligations, or resolve disputes. Customers may request deletion or configure retention settings."
        ]
      },
      {
        "id": "10-security-measures",
        "heading": "10. Security Measures",
        "paragraphs": [
          "We implement appropriate technical and organizational measures to protect Personal Data against unauthorized access, loss, or misuse."
        ]
      },
      {
        "id": "11-rights-of-individuals",
        "heading": "11. Rights of Individuals",
        "paragraphs": [
          "Depending on applicable law, individuals may request access, correction, deletion, restriction, or portability of their data. Requests should be directed to the relevant Customer."
        ]
      },
      {
        "id": "12-children-s-data",
        "heading": "12. Children\u2019s Data",
        "paragraphs": [
          "Cocoonmail is not intended for children under 16 years of age, and we do not knowingly process children\u2019s Personal Data."
        ]
      },
      {
        "id": "13-changes-to-this-policy",
        "heading": "13. Changes to This Policy",
        "paragraphs": [
          "We may update this Privacy Policy from time to time. Changes will be posted with a revised \u201cLast Updated\u201d date."
        ]
      },
      {
        "id": "14-contact-information",
        "heading": "14. Contact Information",
        "paragraphs": [
          "Inofinix Private Limited 301, 10th Cross, Celebrity Paradise Electronic City, Bengaluru \u2013 560100 Karnataka, India Email: privacy@cocoonmail.com",
          "Cocoonmail is a product of Inofinix Private Limited."
        ]
      }
    ]
  },
  "cookie-policy": {
    "slug": "cookie-policy",
    "title": "Cookie Policy",
    "description": "Details on how cookies and tracking technologies are used across our website.",
    "lastUpdated": "Last updated:  11/01/2026",
    "sections": [
      {
        "id": "1-introduction",
        "heading": "1. Introduction",
        "paragraphs": [
          "Cocoonmail (\"Company,\" \"us,\" \"we,\" or \"our\") operates the https://cocoonmail.com website, applications and social media sites to provide products and services offered by Cocoonmail.",
          "We may, through the websites owned and operated by Us (\" Website(s) \"), place and access certain first-party cookies on your computer or device. Any user visiting Our Website(s) will receive cookies from Us, and the details of the cookies used are set out below."
        ]
      },
      {
        "id": "2-what-are-cookies",
        "heading": "2. WHAT ARE COOKIES?",
        "paragraphs": [
          "A cookie is a small text file placed on your computer or device by Our Website when you visit certain parts of Our Website and/or when you use certain features of Our Website. Cookies set by the Website owner are called \"first-party cookies\". Cookies set by parties other than the Website owner are called \"third-party cookies\"."
        ]
      },
      {
        "id": "3-why-do-we-use-cookies",
        "heading": "3. WHY DO WE USE COOKIES?",
        "paragraphs": [
          "We use cookies to facilitate and improve your experience on Our Website(s). More specifically, we use cookies to:",
          "Further to this, Our Website uses website analytics services. Website analytics refers to a set of tools used to collect and analyse usage statistics, enabling Us to better understand how people use Our Website. These enable Us to improve Our Website and the products and services offered through it. You do not have to allow Us to use these cookies, as detailed below, however, while Our use of them does not pose any risk to your privacy or your safe use of Our Website, it does enable Us to continually improve Our Website, making it a better and more useful experience for you."
        ]
      },
      {
        "id": "4-list-of-cookies-we-use",
        "heading": "4. LIST OF COOKIES WE USE",
        "paragraphs": [
          "The cookies used by Us may be categorized as:"
        ]
      },
      {
        "id": "4-how-can-you-control-cookies-usually-before-any-cookies-are-placed-on-your-computer-or-device-you-will-be-shown-a-prompt-such-as-a-pop-up-or-message-bar-requesting-your-consent-to-set-those-cookies-that-are-not-essential-or-strictly-necessary-by-giving-your-consent-to-the-placing-of-these-cookies-you-are-enabling-us-to-provide-the-best-possible-experience-and-service-to-you-you-may-if-you-wish-deny-consent-to-the-placing-of-such-cookies-however-certain-features-of-our-website-may-not-function-fully-or-as-intended",
        "heading": "4. HOW CAN YOU CONTROL COOKIES? Usually, before any cookies are placed on your computer or device, you will be shown a prompt such as a pop-up or message bar requesting your consent to set those cookies that are not essential or strictly necessary. By giving your consent to the placing of these cookies you are enabling Us to provide the best possible experience and service to you. You may, if you wish, deny consent to the placing of such cookies; however certain features of Our Website may not function fully or as intended.",
        "paragraphs": []
      },
      {
        "id": "5-do-not-track",
        "heading": "5. DO NOT TRACK",
        "paragraphs": [
          "Some Internet browsers - like Internet Explorer, Firefox, and Safari - include the ability to transmit \"Do Not Track\" or \"DNT\" signals. Since uniform standards for \"DNT\" signals have not been adopted, Our Website does not currently process or respond to \"DNT\" signals. We take privacy and meaningful choice seriously and will make efforts to continue to monitor developments around DNT browser technology and the implementation of a standard. To learn more about \"DNT\", please visit All About Do Not Track: https://allaboutdnt.com/"
        ]
      },
      {
        "id": "6-resources-you-may-want-to-refer-to",
        "heading": "6. RESOURCES YOU MAY WANT TO REFER TO",
        "paragraphs": [
          "To find out more about cookies, visit www.aboutcookies.org or All About Cookies by TermsFeed .",
          "Further to this, the links below are helpful if you want to learn about advertiser&#x27;s use of cookies:",
          "Below are a few references to some popular browser manufacturers and their help pages relating to cookie management in their respective products:",
          "We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the bottom of this Cookie Policy indicates when it was last updated.",
          "If you have any questions about our use of cookies or other technologies, please email us at info@cocoonmail.com ."
        ]
      },
      {
        "id": "7-how-often-will-we-update-this-cookie-policy",
        "heading": "7. HOW OFTEN WILL WE UPDATE THIS COOKIE POLICY?",
        "paragraphs": [
          "We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the bottom of this Cookie Policy indicates when it was last updated."
        ]
      },
      {
        "id": "8-where-can-you-get-further-information",
        "heading": "8. WHERE CAN YOU GET FURTHER INFORMATION?",
        "paragraphs": [
          "If you have any questions about our use of cookies or other technologies, please email us at info@cocoonmail.com ."
        ]
      }
    ]
  },
  "gdpr-compliance": {
    "slug": "gdpr-compliance",
    "title": "GDPR Compliance",
    "description": "Our commitment to data protection and European Union General Data Protection Regulation compliance.",
    "lastUpdated": "Last updated:  11/01/2026",
    "sections": [
      {
        "id": "our-privacy-policy",
        "heading": "Our Privacy Policy",
        "paragraphs": [
          "We have updated our privacy policy, with the essential features of GDPR compliances. Our Privacy policy explicitly explains how the data is processed on the platform and how one can raise a request for inquiries or feedback on personal data protection policies and procedures.",
          "Learn More \u2192"
        ]
      },
      {
        "id": "our-cookie-policy",
        "heading": "Our Cookie Policy",
        "paragraphs": [
          "We have updated our cookie policy as well. It can be referred to read the detailed explanation on the type of cookies we store to make the experience better and personalized for the users. We have also installed a cookie management system, which asks the user to opt-in or manage their preferences regarding the cookies on our website when they visit the first time.",
          "Learn More \u2192"
        ]
      },
      {
        "id": "our-data-processing-agreements",
        "heading": "Our Data Processing Agreements",
        "paragraphs": [
          "We have extensively formalized our DPAs for our clients and the vendors to create a secure system that would ensure no breach of GDPR norms and regulations. You can request at info@cocoonmail.com to learn more about DPA and associated documents."
        ]
      },
      {
        "id": "additional-information",
        "heading": "Additional Information",
        "paragraphs": [
          "We would regularly be updating the documents when required to maintain transparency on anything related to data and privacy. Moreover, if you wish to learn more regarding GDPR and policies, do refer to the official website here . And if there&#x27;s anything that still needs to be understood, feel free to drop an email at info@cocoonmail.com to have all the answers."
        ]
      }
    ]
  },
  "data-protection": {
    "slug": "data-protection",
    "title": "Cocoonmail Data Protection Policy",
    "description": "Our technical and operational safeguards for data security, encryption, and confidentiality.",
    "lastUpdated": "Last updated:  11/01/2026",
    "sections": [
      {
        "id": "1-introduction",
        "heading": "1. Introduction",
        "paragraphs": [
          "At Cocoonmail, we are committed to protecting the privacy and security of your personal information. This Data Protection Policy outlines how we collect, use, disclose, and safeguard your information when you use our email marketing platform."
        ]
      },
      {
        "id": "2-information-we-collect",
        "heading": "2. Information We Collect",
        "paragraphs": [
          "We may collect the following types of personal information from you:"
        ]
      },
      {
        "id": "3-how-we-use-your-information",
        "heading": "3. How We Use Your Information",
        "paragraphs": [
          "We use the information we collect to:"
        ]
      },
      {
        "id": "4-sharing-your-information",
        "heading": "4. Sharing Your Information",
        "paragraphs": [
          "We may share your personal information with third parties for the following purposes:"
        ]
      },
      {
        "id": "5-your-rights",
        "heading": "5. Your Rights",
        "paragraphs": [
          "You have the right to:"
        ]
      },
      {
        "id": "6-data-security",
        "heading": "6. Data Security",
        "paragraphs": [
          "We take appropriate measures to protect your personal information from unauthorized access, disclosure, or misuse. This includes using encryption, secure servers, and regular security audits."
        ]
      },
      {
        "id": "7-changes-to-this-policy",
        "heading": "7. Changes to This Policy",
        "paragraphs": [
          "We may update this Data Protection Policy from time to time. We will notify you of any significant changes and provide you with an opportunity to review the updated policy."
        ]
      },
      {
        "id": "8-contact-us",
        "heading": "8. Contact Us",
        "paragraphs": [
          "If you have any questions or concerns about this Data Protection Policy, please contact us at info@cocoonmail.com ."
        ]
      }
    ]
  }
};

export const LEGAL_LINKS = [
  { slug: 'terms-of-service', label: 'Terms of Service' },
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'refund-policy', label: 'Refund Policy' },
  { slug: 'cookie-policy', label: 'Cookie Policy' },
  { slug: 'gdpr-compliance', label: 'GDPR Compliance' },
  { slug: 'data-protection', label: 'Data Protection' },
];
