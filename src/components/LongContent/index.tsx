import React from "react"

const articleElement = (
  <>
    <h2 className="text-2xl font-bold text-center my-2">Some title content</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum
      dui, ornare eget semper sed, vulputate ac felis. Fusce consequat a lorem
      eu ultrices. In tortor ligula, eleifend non orci eget, pulvinar vestibulum
      diam. Nullam diam erat, consectetur a auctor id, aliquam vel est. Nunc
      nisl orci, auctor ac iaculis in, lacinia eu nunc. Donec eget magna non
      neque accumsan dictum quis at massa. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Aenean sed erat et
      sem ornare cursus vel id urna. Phasellus fringilla scelerisque nisl, non
      vulputate est facilisis eget. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Curabitur purus turpis, placerat id euismod tincidunt,
      feugiat eget urna. Praesent quis nunc nibh. Nullam eleifend commodo lorem,
      nec semper ipsum facilisis at. Donec id lobortis mauris
    </p>
    <p>
      Vivamus suscipit, nibh id blandit tempor, quam leo faucibus mi, sed
      gravida sem mauris nec mauris. Nam varius faucibus feugiat. Ut convallis
      scelerisque lobortis. Curabitur tellus nisi, lobortis vitae turpis vel,
      malesuada eleifend tellus. Donec eu mi orci. Etiam et consequat diam, sit
      amet dignissim justo. Nunc eu metus consequat, consequat est quis,
      bibendum orci. Sed dignissim diam vel mauris sodales sodales fringilla
      eget tortor. Proin venenatis diam lectus, sed pulvinar purus rutrum eu.
      Proin eget erat mattis, volutpat elit non, porta risus. In ut feugiat
      purus. Etiam dapibus, arcu scelerisque malesuada bibendum, nibh dolor
      fringilla turpis, ac gravida justo diam tempus justo. Aenean scelerisque,
      tortor eu ultricies vestibulum, elit est mattis nulla, at lobortis enim
      ligula sed quam. Nam elementum gravida cursus.
    </p>
    <p>
      Phasellus convallis nisi eu faucibus gravida. Aliquam orci ante, pulvinar
      ut turpis a, posuere scelerisque leo. Nullam eget risus dui. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Etiam sodales elit sed imperdiet lacinia. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Donec sed mattis lacus. Etiam sed
      maximus massa. Phasellus eu pulvinar nisi, a interdum ex. Nam porttitor,
      lectus non commodo sagittis, eros risus feugiat dolor, eget feugiat odio
      velit ut nisl. Sed a viverra lacus, ac tempus lacus.
    </p>
    <p>
      Suspendisse sagittis scelerisque lectus sit amet pretium. Maecenas semper
      libero venenatis risus lacinia hendrerit. Sed sit amet auctor ex. Vivamus
      venenatis egestas ornare. Mauris auctor diam nisi, in consectetur ante
      convallis id. Curabitur gravida diam pulvinar molestie porttitor. Cras
      vitae arcu magna. In imperdiet felis tempus velit vehicula pellentesque.
      Nulla eu lectus at sem imperdiet finibus eget non tortor. Sed vel ex in
      elit pellentesque fringilla. In vestibulum ullamcorper fringilla. Duis
      tortor ligula, dictum sed pellentesque ut, euismod quis purus. Sed mauris
      augue, pellentesque non purus at, congue volutpat felis. Cras sem enim,
      ullamcorper ac suscipit ac, fermentum eu nunc.{" "}
    </p>
  </>
)
const LongContent = (): JSX.Element => {
  return (
    <div className="w-[50%] mx-auto my-4">
      {Array(10)
        .fill(1)
        .map((num, index) => (
          <div key={index}>{articleElement}</div>
        ))}
    </div>
  )
}

export default LongContent
