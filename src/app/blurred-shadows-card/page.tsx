const BlurredShadowsPage = async () => {
  return (
    <div className="fixed top-12 bottom-0 left-0 right-0 bg-[url(/images/hieroglyphs-1.jpg)] h-screen w-screen">
      <h1 className="text-3xl font-bold underline text-center">
        Blurred Shadows Card
      </h1>
      <div className="popup">
        <h1>Popup With Backdrop Blur</h1>
      </div>
    </div>
  )
}

export default BlurredShadowsPage
