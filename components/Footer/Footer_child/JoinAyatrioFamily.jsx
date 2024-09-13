import Image from "next/image";
const JoinemcronixFamily = () => {
  return (
    <div className="space-y-4">
      <p className="sm:text-base text-xl">Join emcronix Family</p>
      <div>
        <Image width={200} height={40} src="/images/logo/emcronix.png" alt="emcronix Logo" priority />
      </div>
      <div>
        <p>
          Enjoy member-only discounts & offers, early access to emcronix sale,
          delicious gift offers and much more. Join for free.
        </p>
      </div>
      <button className="bg-black py-3 sm:px-7 px-3 rounded-full text-white">
        Join the club
      </button>
    </div>
  );
};

export default JoinemcronixFamily;
