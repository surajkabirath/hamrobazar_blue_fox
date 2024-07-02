import header from "../../assets/hamrobazarheading.gif"
import header2 from "../../assets/header2.gif"
const Header = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex justify-around items-center py-2">
        <img src={header} alt="" width={1280} height={120} />

    </div>
    <div className="max-w-screen-xl mx-auto flex justify-around items-center py-2">
        <img src={header2} alt="" width={1280} height={120} />

    </div>
    </>
   
  )
}

export default Header