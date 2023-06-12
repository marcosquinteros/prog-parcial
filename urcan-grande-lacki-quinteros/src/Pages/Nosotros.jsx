import React from "react";
import Integrantes from "../Components/Integrantes";

/*
<a data-flickr-embed="true" href="https://www.flickr.com/photos/198334340@N04/52927864911/in/dateposted-public/" title="imgBigOne"><img src="https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg" width="1200" height="1200" alt="imgBigOne"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
*/

const Nosotros = () => {
  return (
    <div className="w-100">
      <main className="content">
        <hr />
        <Integrantes />
        <hr />
      </main>
    </div>
  );
};

export default Nosotros;
