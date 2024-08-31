import React, { useState } from "react";
import { Tab } from "@headlessui/react";

const LegalDocuments = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const termsOfService = `
# Terms of Service for [www.seven7trades.com]

Last updated: [August 2024]

1. Acceptance of Terms

By accessing and using [www.seven7trades.com] (the "Website"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Website.

2. Use of the Website

You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Website.

3. Intellectual Property

The content on this Website, including but not limited to text, graphics, logos, and images, is the property of [seven7trades] and is protected by copyright laws of the Philippines and international copyright treaties.

4. User-Generated Content

If applicable:
By submitting content to our Website, you grant us a non-exclusive, royalty-free license to use, modify, and display that content on our Website.

5. Limitation of Liability

[seven7trades] is not liable for any damages arising out of or in connection with your use of this Website, to the fullest extent permitted by Philippine law.

6. Changes to Terms

We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting a notice on our Website.

7. Governing Law

These Terms of Service are governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [National Capital Region], Philippines.

8. Consumer Protection

These Terms of Service comply with the Consumer Act of the Philippines (Republic Act No. 7394) and other relevant Philippine laws protecting consumers' rights.

9. Contact Information

If you have any questions about these Terms, please contact us at:

www.seven7trades.com
Manila, Philippines
Email: information@seven7trades.com
Phone: +63 994 298 1673
Chat: https://t.me/seven7trades
  `;

  const privacyPolicy = `
# Privacy Policy for [www.seven7trades.com]

Last updated: [August 2024]

1. Introduction

[seven7trades] ("we", "us", or "our") operates [www.seven7trades.com] (the "Website"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Website.

We are committed to protecting your privacy and complying with the Data Privacy Act of 2012 (Republic Act No. 10173) and its Implementing Rules and Regulations.

2. Information Collection and Use

While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, and phone number ("Personal Information").

3. Log Data

Like many website operators, we collect information that your browser sends whenever you visit our Website ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages and other statistics.

4. Cookies

Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

5. Use and Disclosure of Personal Information

We use your Personal Information only for providing and improving the Website. By using the Website, you agree to the collection and use of information in accordance with this policy.

We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.

6. Security

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

7. Changes to This Privacy Policy

This Privacy Policy is effective as of [29 August 2024] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.

8. Your Rights

Under the Data Privacy Act of 2012, you have the right to access, modify, erase and object to processing of your personal data. To exercise these rights, please contact us using the information provided below.

9. Contact Us

If you have any questions about this Privacy Policy, please contact us at:

www.seven7trades.com
Metro Manila, Philippines
Email: information@seven7trades.com
Phone: +63 994 2981673
Chat: https://t.me/seven7trades
  `;

  const renderContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-2xl font-bold mb-4">
            {paragraph.replace("# ", "")}
          </h1>
        );
      } else if (/^\d+\./.test(paragraph)) {
        return (
          <h2 key={index} className="text-xl font-semibold mt-6 mb-2">
            {paragraph}
          </h2>
        );
      } else if (paragraph.trim() !== "") {
        return (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-4">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
              ${
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              }`
            }
          >
            Terms of Service
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
              ${
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              }`
            }
          >
            Privacy Policy
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="bg-white rounded-xl p-4 shadow-md">
            <div className="prose max-w-none">
              {renderContent(termsOfService)}
            </div>
          </Tab.Panel>
          <Tab.Panel className="bg-white rounded-xl p-4 shadow-md">
            <div className="prose max-w-none">
              {renderContent(privacyPolicy)}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default LegalDocuments;
