import React from "react"
function Footer() {
  return (
    <footer className="dark:bg-[#F2E8C6] container mx-auto py-1 max-w-full fixed bottom-0 bg-[#952323]">
      <p className="dark:text-[#952323] text-xs text-center text-[#F2E8C6] w-full font-adlam">
        &copy; {new Date().getFullYear()} Parum Legis. All Rights Reserved.
      </p>
    </footer>
  )
}
export default Footer
