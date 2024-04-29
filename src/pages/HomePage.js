import "../style/home-page/page.scss";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";

function HomePage() {
  return (
    <div className="page">
      <div className="home-page-theme">
        Vivamus ullamcorper lectus libero, nec dapibus ipsum facilisis lobortis.
        Aenean eu ex pretium, iaculis diam vitae, lobortis urna. Sed ultricies
        pretium odio, non consectetur turpis tincidunt vitae. Phasellus aliquet
        tortor sed tortor euismod, ac porta lectus dapibus. Curabitur mattis sed
        ipsum a aliquam. Aliquam vehicula sollicitudin erat, non ultrices lorem.
        Aliquam sed felis massa. Proin auctor est nisl, sit amet aliquet enim
        rhoncus nec. Nullam sit amet tincidunt nisl, nec placerat sem. Nulla
        facilisi. Suspendisse vel lectus non risus scelerisque mollis in a
        neque. Cras maximus quam venenatis sapien bibendum, quis gravida felis
        accumsan. Suspendisse mauris elit, tempor in sagittis sed, cursus at
        magna. Suspendisse et mi est. Vivamus id pulvinar metus, at tempor
        lectus. Integer risus lorem, imperdiet sed feugiat id, condimentum eu
        eros. Fusce at euismod lectus, nec hendrerit magna. Morbi ac dui eget
        erat interdum scelerisque. Quisque eget sem velit. Aliquam et erat
        egestas, lacinia augue ut, vulputate velit. Sed faucibus lorem in est
        suscipit, eu blandit sem efficitur. Quisque vitae enim pharetra,
        molestie mauris ac, scelerisque augue. Mauris in eros ex. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Ut ornare et lorem in ultricies.
      </div>
      <div className="home-page-person-container">
        <div className="home-page-person">
          <div className="person-img-wrapper">
            <img alt="person1" className="person-img" src={person1}></img>
          </div>

          <div>
            <h1 className="home-page-person-title">Sara Machaj</h1>
            <p className="home-page-person-text">
              Aenean id odio ac felis cursus tempor non ac neque. Maecenas sit
              amet luctus libero, eu posuere leo. Fusce pellentesque nunc
              mauris, at eleifend est ornare sit amet. Duis in augue sit amet
              ligula porta lacinia ac ut velit. Phasellus iaculis elit ut quam
              sollicitudin, ac bibendum leo aliquet. Pellentesque non nibh
              lacinia, auctor diam in, blandit lacus. Ut laoreet sollicitudin
              facilisis.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img-wrapper">
            <img alt="person2" className="person-img" src={person2}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">Marek Zadora</h1>
            <p className="home-page-person-text">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vivamus a lorem nec quam vulputate
              ullamcorper.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img-wrapper">
            <img alt="person3" className="person-img" src={person3}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">Janina Depa</h1>
            <p className="home-page-person-text">
              Mauris in nisi ac turpis fermentum vestibulum. Nam suscipit
              dignissim purus ut tincidunt. Vestibulum id mi velit. Praesent
              consequat magna non augue tempus, mollis cursus elit vestibulum.
              Aliquam interdum nibh enim, quis facilisis lacus imperdiet eu.
              Aliquam fermentum, felis sed tristique condimentum, est libero
              finibus turpis, quis maximus nisi neque eu leo. In vel elit ac
              nulla euismod rhoncus.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img-wrapper">
            <img alt="person4" className="person-img" src={person4}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">Konrad Kochel</h1>
            <p className="home-page-person-text">
              Duis risus sem, porttitor non tristique at, iaculis sit amet sem.
              Aliquam eget urna ipsum. Etiam tincidunt sed nisi et eleifend.
              Etiam eu dapibus ipsum. Suspendisse sagittis diam vitae euismod
              eleifend.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div>
            <h1 className="home-page-person-title">Aenean </h1>
            <p className="home-page-person-text">
              Vestibulum id mi velit. Praesent consequat magna non augue tempus,
              mollis cursus elit vestibulum. Aliquam interdum nibh enim, quis
              facilisis lacus imperdiet eu. Aliquam fermentum, felis sed
              tristique condimentum, est libero finibus turpis, quis maximus
              nisi neque eu leo. In vel elit ac nulla euismod rhoncus.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div>
            <h1 className="home-page-person-title">Integer risus lorem</h1>
            <p className="home-page-person-text">
              Vivamus ullamcorper lectus libero, nec dapibus ipsum facilisis
              lobortis. Aenean eu ex pretium, iaculis diam vitae, lobortis urna.
              Sed ultricies pretium odio, non consectetur turpis tincidunt
              vitae. Phasellus aliquet tortor sed tortor euismod, ac porta
              lectus dapibus. Curabitur mattis sed ipsum a aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className="home-page-theme">
        Donec vulputate dui sed sem efficitur volutpat. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nullam pharetra, orci vel scelerisque egestas, lorem nulla semper lacus,
        vitae consectetur nisi massa eget urna.
      </div>
      <div className="home-page-theme">
        <h1>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit:{" "}
        </h1>
        <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        <p>• Nullam ultrices elit quis sodales viverra,</p> <p></p> • Quisque
        varius turpis eu dolor ornare congue,{" "}
        <p>• Morbi dapibus erat eu magna mollis vestibulum, </p>
        <p> • Aenean ac ante ac est viverra finibus,</p>{" "}
        <p>• Vestibulum ac enim egestas, molestie augue non, tincidunt mi.</p>
      </div>
    </div>
  );
}

export default HomePage;
