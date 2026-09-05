import { NextRequest, NextResponse } from "next/server";
import mailgun from "mailgun-js";

const mailgunApiKey = process.env.MAILGUN_API_KEY;
const mailgunDomain = process.env.MAILGUN_DOMAIN;

if (!mailgunApiKey || !mailgunDomain) {
  throw new Error(
    "MAILGUN_API_KEY or MAILGUN_DOMAIN is not defined in environment variables."
  );
}

const mg = mailgun({
  apiKey: mailgunApiKey,
  domain: mailgunDomain,
});

// Convert HTML time value such as "09:00" to "9:00 AM"
function formatTime(time: string | null | undefined) {
  if (!time) return "N/A";

  const [hours, minutes] = time.split(":").map(Number);

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes)
  ) {
    return time;
  }

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get form data from frontend
    const data = await request.json();

    console.log("📩 New cruise inquiry received:", data);

    const {
      firstName,
      lastName,
      email,
      cruiseDate,
      cruiseShip,
      terminal,

      // Updated time fields
      availableFrom,
      needToBeBackBy,

      // New fields
      luggage,
      goingAfterSeattle,

      numberOfGuests,
      phone,
      interests,
      inquiryType,
    } = data;

    // Format times for email
    const formattedAvailableFrom = formatTime(availableFrom);
    const formattedNeedToBeBackBy = formatTime(needToBeBackBy);

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !cruiseDate ||
      !availableFrom ||
      !needToBeBackBy ||
      !numberOfGuests ||
      !luggage ||
      !goingAfterSeattle ||
      !interests
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Email sent to admin
  // Email sent to admin
const emailContent = `
  <div style="
    margin: 0;
    padding: 0;
   
    font-family: Arial, Helvetica, sans-serif;
    color: #334155;
  ">

    <div >

      <!-- Main Email Card -->
      <div style="
        background-color: #ffffff;
        
        overflow: hidden;
      ">

        <!-- Header -->
        <div style="
         
          padding: 28px 30px;
          color: #000;
        ">
          <h2 style="
            margin: 0 0 8px 0;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 700;
            color: #000000;
          ">
            New Cruise Guest Inquiry
          </h2>

          <p style="
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
            color: #000;
          ">
            A new <strong style="color: #000;">
              Cruise Guest / Plan My Seattle Time
            </strong>
            inquiry has been submitted.
          </p>
        </div>


        <!-- Customer Information -->
        <div style="padding: 28px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
           
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            Customer Information
          </h3>

          <table style="
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          ">

            <tr>
              <td style="
                width: 38%;
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              
              ">
                First Name
              </td>

              <td style="
                width: 62%;
               
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
               
              ">
                ${firstName}
              </td>
            </tr>

            <tr>
              <td style="
              
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              
              ">
                Last Name
              </td>

              <td style="
               
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
             
              ">
                ${lastName}
              </td>
            </tr>

            <tr>
              <td style="
                
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
               
              ">
                Email
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              
                word-break: break-word;
              ">
                <a
                  href="mailto:${email}"
                  style="color: #475569; text-decoration: none;"
                >
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
               
              ">
                Phone / WhatsApp
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              
              ">
                ${phone || "N/A"}
              </td>
            </tr>

            <tr>
              <td style="
              
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              ">
                Number of Guests
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              ">
                ${numberOfGuests}
              </td>
            </tr>

          </table>
        </div>


        <!-- Cruise Information -->
        <div style="padding: 20px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
           
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            Cruise Information
          </h3>

          <table style="
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          ">

            <tr>
              <td style="
                width: 38%;
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
               
              ">
                Cruise Date
              </td>

              <td style="
                width: 62%;
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
               
              ">
                ${cruiseDate}
              </td>
            </tr>

            <tr>
              <td style="
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              
              ">
                Cruise Ship
              </td>

              <td style="
             
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
               
              ">
                ${cruiseShip || "N/A"}
              </td>
            </tr>

            <tr>
              <td style="
                
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              ">
                Cruise Terminal (if known)
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              ">
                ${terminal || "N/A"}
              </td>
            </tr>

          </table>
        </div>


        <!-- Seattle Time Window -->
        <div style="padding: 20px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
            
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            Seattle Time Window
          </h3>

          <table style="
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          ">

            <tr>
              <td style="
                width: 38%;
              
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
               
              ">
                Available From
              </td>

              <td style="
                width: 62%;
              
                font-size: 14px;
                font-weight: 600;
                color: #1e293b;
                vertical-align: top;
              
              ">
                ${formattedAvailableFrom}
              </td>
            </tr>

            <tr>
              <td style="
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              ">
                Need to Be Back By
              </td>

              <td style="
              
                font-size: 14px;
                font-weight: 600;
                color: #1e293b;
                vertical-align: top;
              ">
                ${formattedNeedToBeBackBy}
              </td>
            </tr>

          </table>
        </div>


        <!-- Travel Details -->
        <div style="padding: 20px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
           
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            Travel Details
          </h3>

          <table style="
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          ">

            <tr>
              <td style="
                width: 38%;
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
                
              ">
                Will Have Luggage
              </td>

              <td style="
                width: 62%;
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
               
              ">
                ${luggage}
              </td>
            </tr>

            <tr>
              <td style="
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              ">
                Going After Seattle
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              ">
                ${goingAfterSeattle}
              </td>
            </tr>

          </table>
        </div>


        <!-- What They Want To See -->
        <div style="padding: 20px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
           
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            What They Want To See
          </h3>

          <div style="
            background-color: #f4f4f4;
            border: 1px solid #efefef;
            border-radius: 8px;
            padding: 16px 18px;
            color: #334155;
            font-size: 14px;
            line-height: 1.7;
            word-break: break-word;
          ">
            ${interests}
          </div>

        </div>


        <!-- Inquiry Information -->
        <div style="padding: 20px 30px 10px 30px;">

          <h3 style="
            margin: 0 0 16px 0;
            padding-bottom: 10px;
            
            color: #000;
            font-size: 17px;
            line-height: 1.4;
            font-weight: 700;
          ">
            Inquiry Information
          </h3>

          <table style="
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          ">

            <tr>
              <td style="
                width: 38%;
               
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
                
              ">
                Inquiry Type
              </td>

              <td style="
                width: 62%;
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
               
              ">
                ${inquiryType || "Cruise Guest / Plan My Seattle Time"}
              </td>
            </tr>

            <tr>
              <td style="
              
                font-size: 14px;
                font-weight: 700;
                color: #475569;
                vertical-align: top;
              ">
                Submitted
              </td>

              <td style="
              
                font-size: 14px;
                color: #1e293b;
                vertical-align: top;
              ">
                ${new Date().toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </td>
            </tr>

          </table>
        </div>


        <!-- Quick Contact -->
        <div style="
          margin: 20px 30px 30px 30px;
          padding: 18px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        ">

          <p style="
            margin: 0 0 8px 0;
            font-size: 14px;
            line-height: 1.6;
          ">
            <strong style="color: #334155;">
              Customer Email:
            </strong>

            <a
              href="mailto:${email}"
              
            >
              ${email}
            </a>
          </p>

          ${
            phone
              ? `
                <p style="
                  margin: 0;
                  font-size: 14px;
                  line-height: 1.6;
                ">
                  <strong style="color: #334155;">
                    Customer Phone:
                  </strong>

                  <a
                    href="tel:${phone}"
                    
                  >
                    ${phone}
                  </a>
                </p>
              `
              : ""
          }

        </div>


        <!-- Footer -->
        <div style="
          border-top: 1px solid #e2e8f0;
          padding: 18px 30px;
          background-color: #f8fafc;
        ">

          <p style="
            margin: 0;
            color: #64748b;
            font-size: 12px;
            line-height: 1.6;
            text-align: center;
          ">
            This inquiry was submitted through the Six Hour Layover website.
          </p>

        </div>

      </div>

    </div>
  </div>
`;




    // Send email to ADMIN
    const mailData = {
      from: "Six Hour Layover <noreply@sixhourlayover.com>",

      // Change this if your admin email is different
      to: ['booking@sixhourlayover.com'],

      subject: `New Cruise Guest Inquiry - ${firstName} ${lastName}`,

      html: emailContent,

      // Plain-text version
      text: `
New Cruise Guest Inquiry

CUSTOMER INFORMATION
--------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone / WhatsApp: ${phone || "N/A"}
Number of Guests: ${numberOfGuests}

CRUISE INFORMATION
------------------
Cruise Date: ${cruiseDate}
Cruise Ship: ${cruiseShip || "N/A"}
Cruise Terminal (if known): ${terminal || "N/A"}

SEATTLE TIME WINDOW
-------------------
Available From: ${formattedAvailableFrom}
Need to Be Back By: ${formattedNeedToBeBackBy}

TRAVEL DETAILS
--------------
Will you have luggage with you?: ${luggage}
Where will you be going after your Seattle experience?: ${goingAfterSeattle}

WHAT THEY WANT TO SEE
---------------------
${interests}

INQUIRY TYPE
------------
${inquiryType || "Cruise Guest / Plan My Seattle Time"}

Submitted:
${new Date().toLocaleString("en-US", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})}

This inquiry was submitted through the Six Hour Layover website.
      `,
    };

    console.log("📤 Sending inquiry email to admin...");

    const response = await mg.messages().send(mailData);

    console.log("✅ Inquiry email sent:", response);

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
    });

  } catch (error) {
    console.error("❌ Failed to send inquiry email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry email.",
      },
      { status: 500 }
    );
  }
}