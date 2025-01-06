export function GetStartedBtnYellow({text = "Get Started"}) {
  return (
    <a
      href="https://socialflow.streamlit.app/"
      target="_blank"
      rel="noopener"
      className="sm:h-[56px] h-[50px] w-[190px] text-base sm:text-lg lg:text-xl font-normal flex items-center justify-center text-black-main bg-brand-secondary rounded-[50px]"
    >
      {text}
    </a>
  );
}

export function GetStartedBtnBlue() {
  return (
    <a
      href="https://socialflow.streamlit.app/"
      target="_blank"
      rel="noopener"
      className="w-full mt-2 flex-shrink-0 sm:h-[72px] h-[60px] text-white-main text-base font-bold sm:text-lg flex items-center justify-center bg-brand-main rounded-[40px]"
    >
      Get started
    </a>
  );
}

export function GetStartedBtnWhite() {
  return (
    <a
      href="https://socialflow.streamlit.app/"
      target=""
      className="w-full mt-2 flex-shrink-0 sm:h-[72px] h-[60px] text-brand-main text-base font-bold sm:text-lg flex items-center justify-center bg-white-main rounded-[40px]"
    >
      Get started
    </a>
  );
}
