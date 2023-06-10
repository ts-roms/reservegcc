import Link from '@/Components/Link';
import { FunctionComponent } from 'react';

interface SummaryProps {

}

const Summary: FunctionComponent<SummaryProps> = () => {
  return (
    <>
      <div className="">
        <h3 className="text-xl font-black py-7">SUMMARY OF KEY POINTS</h3>

        <p className="italic text-xl font-black">
          This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the
          link following each key point or by using our table of contents below to find the section you are looking for.
          You can also click <Link href="#table-of-contents" className="text-blue-600">here</Link> to go directly to our table of contents.
        </p>

        <div className="pt-5">
          <h3 className="text-xl font-bold">What personal information do we process?</h3>
          <p className="">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with __________ and the Services, the choices you make, and the products and features you use. Click <Link href="#content-1" className="text-blue-600">here</Link> to learn more.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">Do we process any sensitive personal information?</h3>
          <p className="">We do not process sensitive personal information.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">Do we receive any information from third parties?</h3>
          <p className="">We do not receive any information from third parties.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">How do we process your information?</h3>
          <p className="">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click <Link href="#" className="text-blue-600">here</Link> to learn more.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">In what situations and with which parties do we share personal information?</h3>
          <p className="">We may share information in specific situations and with specific third parties. Click <Link href="#content-7" className="text-blue-600">here</Link> to learn more.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">What are your rights?</h3>
          <p className="">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <Link href="#content-3" className="text-blue-600">here</Link> to learn more.</p>
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold">How do you exercise your rights?</h3>
          <p className="">The easiest way to exercise your rights is by filling out our data subject request form available <Link href="https://app.termly.io/notify/b19d00a0-ba26-447d-a34e-02a5836e8ff3" target='__blank' className="text-blue-600">here</Link>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
        </div>
        <div className="">
          <p>Want to learn more about what __________ does with any information we collect? Click <Link href="#table-of-contents" className="text-blue-600">here</Link> to review the notice in full.</p>
        </div>
      </div>
    </>
  );
}

export default Summary;