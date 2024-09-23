import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="https://seeklogo.com/images/H/harvard-university-logo-D7CC65EE30-seeklogo.com.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h2>Certificate of Sanity & Non-Criminal Status</h2>
        <h3></h3>

        <p>
        This is to certify that:<br/><br/>
        
        <b>Karl Park</b><br/>

is officially verified and confirmed to NOT be a psycho, serial killer, or engage in any homicidal tendencies.
Rest assured, Karl is an upstanding, non-dangerous individual who enjoys perfectly safe and socially acceptable hobbies like eating pizza and watching Netflix.
        </p>

        <p>
        <b>Issued by:</b><br/><br/>

	•	Department of Social Safety & Reassurance
(A completely legitimate and trustworthy organization.)
        </p>

        <p>
        <b>Description:</b><br/><br/>
This certificate guarantees that Karl has undergone rigorous evaluations, including:<br/><br/>
	•	The No-Knife-in-the-Back Test<br/>
	•	The Normal Human Conversation Skills Exam<br/>
	•	The Zero Serial Killer Vibes Detection System<br/>

        </p>
        <p>
          <b>Issued on</b>: September 23, 2024<br/>
          <b>Valid until</b>: Karl does something suspicious (hopefully never).<br/>
        </p>
      </main>
    </div>
  );
}
