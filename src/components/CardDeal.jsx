import { card, tree } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Services We <br className="sm:block hidden" /> Specialize In
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As a blockchain development firm, we offer top-notch app services and
        blockchain consulting to unlock the full potential of blockchain
        technology and drive transformative change in your organization.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={tree} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
