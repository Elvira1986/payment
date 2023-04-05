import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Flexible payment <br className="sm:block hidden" /> solutions.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Make the sale in-store or online, and take credit cards, EMV chip cards,
        gift cards, mobile wallets and more. Our payment processing is fast,
        secure and reliable with fair and transparent rates.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
