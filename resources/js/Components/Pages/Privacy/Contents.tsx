import { FunctionComponent } from 'react';
import personalInformations from '../../../Data/privacy.json';
import Link from '@/Components/Link';

interface ContentsProps {

}

const Contents: FunctionComponent<ContentsProps> = () => {
  return (
    <>
      <ul className="pt-10 list-decimal pl-5">
        <li id="content-1" className="">
          {/* Content 1 */}
          <h3 className="uppercase text-xl font-bold">What information do we collect?</h3>
          <div className="py-5">
            <h2 className='font-bold text-xl'>Personal information you disclose to us.</h2>

            <div className="pt-4">
              <p className='italic'><span className='text-xl font-bold'>In Short:</span> We collect personal information that you provide to us.</p>
              <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            </div>

            <div className="pt-4">
              <p><span className="font-bold text-xl">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul className='list-square pl-5 pt-3'>
                <li>Phone numbers</li>
                <li className='pt-3'>Names</li>
                <li className='pt-3'>Email Addresses</li>
              </ul>
            </div>

            <div className="pt-4">
              <p>
                <span className='font-bold text-xl'>Sensitive Information.&nbsp;</span>
                We do not process sensitive information.
              </p>
            </div>

            <div className="pt-4">
              <p>
                <span className='font-bold text-xl'>Social Media Login Data.&nbsp;</span>
                We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called <Link href="#content-5" className="text-blue-400">"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</Link> below.</p>
            </div>

            <div className="pt-4">
              <p>
                <span className='font-bold text-xl'>Application Data.&nbsp;</span>
                If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
              </p>
              <ul className='list-square pl-5 pt-3'>
                <li>
                  <span className='italic'>Push Notifications.</span> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                </li>
              </ul>
              <p className='pt-4'>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
              <p className='pt-4'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
            </div>
          </div>

        </li>
        <li id="content-2" className="pt-5">
          {/* Content 2 */}
          <h3 className="uppercase text-xl font-bold">Do we process your information?</h3>

          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          </div>

          <div className="pt-4">
            <h3 className='text-xl font-bold'>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</h3>
            <ul className='pl-4 list-square gap-4 pt-4'>
              <li>
                <h3 className='text-xl font-bold'>To facilitate account creation and authentication and otherwise manage user accounts.</h3>
                <p>We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
              </li>
              <li>
                <h3 className='text-xl font-bold pt-4'>To respond to user inquiries/offer support to users.</h3>
                <p>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</p>
              </li>
            </ul>
          </div>
        </li>
        <li id="content-3" className="pt-5">
          {/* Content 3 */}
          <h3 className="uppercase text-xl font-bold">When and with whom do we share your personal information?</h3>

          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span> We may share information in specific situations described in this section and/or with the following third parties.</p>
          </div>

          <div className="pt-4">
            <h4>We may need to share your personal information in the following situations:</h4>
            <ul className='list-square pl-4 pt-4'>
              <li>
                <span className='text-xl font-bold'>Business Transfers.&nbsp;</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
          </div>

        </li>
        <li id="content-4" className="pt-5">
          {/* Content 4 */}
          <h3 className="uppercase text-xl font-bold">Do we use cookies and other tracking technologies?</h3>

          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span> We may use cookies and other tracking technologies to collect and store your information.</p>
          </div>

          <div className="pt-4">
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
          </div>
        </li>
        <li id="content-5" className="pt-5">
          {/* Content 5 */}
          <h3 className="uppercase text-xl font-bold">How do we handle social logins?</h3>

          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</p>
          </div>

          <div className="">
            <p className='pt-5'>
              Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
            </p>
            <p className='pt-5'>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
          </div>


        </li>
        <li id="content-6" className="pt-5">
          {/* Content 6 */}
          <h3 className="uppercase text-xl font-bold">How long do we keep your information?</h3>
          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
          </div>

          <div className="">
            <p className='pt-4'>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than .
            </p>
            <p className='pt-4'>
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </div>
        </li>
        <li id="content-7" className="pt-5">
          {/* Content 7 */}
          <h3 className="uppercase text-xl font-bold">What are your privary rights?</h3>
          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span>  You may review, change, or terminate your account at any time</p>
          </div>

          <div className="">
            <p className='pt-4'>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <Link href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm." className='text-blue-400' target='__blank'>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</Link></p>
            <p className='pt-4'>If you are located in Switzerland, the contact details for the data protection authorities are available here: <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html." target='__blank' className='text-bold-400'>https://www.edoeb.admin.ch/edoeb/en/home.html.</Link></p>
          </div>

          <div className="">
            <p className="pt-4"><span>Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <Link href="#content-11" className='text-blue-400'>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</Link> below.</p>
            <p className="pt-4">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          </div>

          <div className="">
            <h4 className='text-xl font-bold'>Account Information</h4>
            <p className='pt-4'>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
            <ul className='list-square pl-4 pt-4'>
              <li>Log in to your account settings and update your user account.</li>
            </ul>
            <p className='pt-4'>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
          </div>


        </li>
        <li id="content-8" className="pt-5">
          {/* Content 8 */}
          <h3 className="uppercase text-xl font-bold">Controls for do-not-track features</h3>
          <div className="">
            <p className='pt-4'>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            </p>
          </div>
        </li>
        <li id="content-9" className="pt-5">
          {/* Content 9 */}
          <h3 className="uppercase text-xl font-bold">Do california residents have specific privacy rights?</h3>
          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span>  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
          </div>
          <div className="pt-4">
            <p className="pt-4">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            </p>
            <p className="pt-4">
              If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
            </p>
          </div>

          <div className="pt-5">
            <h3 className='text-xl font-bold'>CCPA Privacy Notice</h3>
            <p className="pt-4">The California Code of Regulations defines a "resident" as:</p>
            <div className="pt-4">
              <ul className='pl-4'>
                <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
              </ul>
            </div>
            <p className="pt-4">All other individuals are defined as "non-residents."</p>
            <p className="pt-4">If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>
          </div>


          <div className="pt-4 pb-4">
            <h3 className='text-xl font-bold'>What categories of personal information do we collect?</h3>
            <p className="pt-4">We have collected the following categories of personal information in the past twelve (12) months:</p>
          </div>

          {/* Table */}
          <table>
            <thead className='text-center'>
              <tr>
                <th className='border py-2 pl-2 w-1/4'>Category</th>
                <th className='border py-2 pl-2'>Examples</th>
                <th className='border py-2 pl-2 w-1/4'>Collected</th>
              </tr>
            </thead>
            <tbody>
              {
                personalInformations.map((info) => (
                  <tr>
                    <td className='border py-4 pl-2'>{info.category}</td>
                    <td className='border py-4 pl-2'>{info.examples}</td>
                    <td className='border py-4 pl-2 text-center'>{info.collected}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          {/* End Table */}

          <div className="pt-6">
            <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
            <ul className='list-square pt-4 pl-10'>
              <li>Receiving help through our customer support channels;</li>
              <li className='pt-4'>Participation in customer surveys or contests; and</li>
              <li className='pt-4'>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
            </ul>
          </div>

          <div className="pt-5">
            <h3 className='text-xl font-bold'>How do we use and share your personal information?</h3>
            <p className='pt-4'>More information about our data collection and sharing practices can be found in this privacy notice.</p>
            <p className='pt-4'>You may contact us or by referring to the contact details at the bottom of this document.</p>
            <p className='pt-4'>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>
          </div>

          <div className="pt-5">
            <h3 className='text-xl font-bold'>Will your information be shared with anyone else?</h3>
            <p className='pt-4'>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
            <p className='pt-4'>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
            <p className='pt-4'>__________ has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. __________ will not sell personal information in the future belonging to website visitors, users, and other consumers</p>
          </div>

          <div className="pt-5">
            <h3 className='text-xl font-bold'>Your rights with respect to your personal data</h3>

            <div className="pt-5">
              <h4 className='underline'>Right to request deletion of the data — Request to delete</h4>
              <p className='pt-4'>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
            </div>

            <div className="pt-5">
              <h4 className='underline'>Right to be informed — Request to know</h4>
              <p className='pt-4'>Depending on the circumstances, you have a right to know:</p>
              <ul className='list-square pt-4 pl-7'>
                <li>whether we collect and use your personal information;</li>
                <li className='pt-4'>the categories of personal information that we collect;</li>
                <li className='pt-4'>the purposes for which the collected personal information is used;</li>
                <li className='pt-4'>whether we sell your personal information to third parties;</li>
                <li className='pt-4'>the categories of personal information that we sold or disclosed for a business purpose;</li>
                <li className='pt-4'>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                <li className='pt-4'>the business or commercial purpose for collecting or selling personal information.</li>
              </ul>
              <p className='pt-4'>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
            </div>

            <div className="pt-4">
              <h4 className='underline'>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</h4>
              <p className='pt-4'>We will not discriminate against you if you exercise your privacy rights.</p>
            </div>

            <div className="pt-4">
              <h4 className='underline'>Verification process</h4>
              <p className='pt-4'>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
              <p className='pt-4'>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>
            </div>

            <div className="pt-4">
              <h4 className="underline">Other privacy rights</h4>
              <ul className="list-square pt-4 pl-5">
                <li>You may object to the processing of your personal information.</li>
                <li className='pt-4'>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
                <li className='pt-4'>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                <li className='pt-4'>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
              </ul>
              <p className='pt-4'>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</p>
            </div>

          </div>

        </li>
        <li id="content-10" className="pt-5">
          {/* Content 10 */}
          <h3 className="uppercase text-xl font-bold">Do we make updates to this notice?</h3>
          <div className="pt-4">
            <p className='italic'><span className='text-xl font-bold'>In Short:</span>  Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          </div>
          <div className="pt-4">
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </div>

        </li>
        <li id="content-11" className="pt-5">
          {/* Content 11 */}
          <h3 className="uppercase text-xl font-bold">How can you contact us about this notice?</h3>
          <div className="">
            <p className='pt-4'>
              If you have questions or comments about this notice, you may email us at __________ or by post to:
            </p>
            <p>__________</p>
            <p>__________</p>
            <p>__________</p>
          </div>
        </li>
        <li id="content-12" className="pt-5">
          {/* Content 12 */}
          <h3 className="uppercase text-xl font-bold">How can you review, update or delete the data we collection from you?</h3>
          <div className="pt-4">
            <p>
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking <Link href="https://app.termly.io/notify/b19d00a0-ba26-447d-a34e-02a5836e8ff3" className='text-blue-400' target='__blank'>here</Link>.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Contents;