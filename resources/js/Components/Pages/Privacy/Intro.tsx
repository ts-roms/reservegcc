import Link from '@/Components/Link';
import { FunctionComponent } from 'react';

interface IntroProps {

}

const Intro: FunctionComponent<IntroProps> = () => {
  return (
    <>
      <div className="">
        <p className="pt-4">
          This privacy notice for __________ ("<span className="font-black text-xl">Company</span>," "<span className="font-black text-xl">we,</span>" "<span className="font-black text-xl">us,</span>" or "<span className="font-black text-xl">our</span>"),
          describes how and why we might collect, store, use, and/or share ("<span className="font-black text-xl">process</span>") your
          information when you use our services ("<span className="font-black text-xl">Services</span>"), such us when you:
        </p>
        <ul className="list-square pt-4 pl-5">
          <li>Visit our website at <Link href='https://reservegcc.com/' target='__blank' className='text-blue-400'>https://reservegcc.com/</Link>, or any website of ours that links to this privacy notice.</li>
          <li className='pt-3'>Download and use our mobile application (reservegcc), or any other application of ours that links to this privacy notice.</li>
          <li className='pt-3'>Engage with us in other related ways, including any sales, marketing, or events.</li>
        </ul>
        <p className="pt-4">
          <span className="font-black text-xl">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights
          and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns,
          please contact us at __________.
        </p>
      </div>
    </>
  );
}

export default Intro;