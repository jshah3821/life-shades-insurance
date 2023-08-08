import classes from "./testimonialCard.module.scss";
interface props {
  src: string;
  description: string;
  reviewerName: string;
  reviewerDesignation: string;
}
const TestimonialCard = ({
  src,
  description,
  reviewerName,
  reviewerDesignation,
}: props) => {
  return (
    <div className={classes.card}>
      <div className={classes.firstRow}>
        <div className={classes.imgContainer}>
          <img alt="testimonial_image" src={src} />
        </div>
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.reviewerName}>- {reviewerName}</div>
      <div className={classes.reviewerDesignation}>{reviewerDesignation}</div>
    </div>
  );
};

export default TestimonialCard;
