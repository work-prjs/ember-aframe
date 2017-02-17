export default function() {
  this.transition(
    this.hasClass('link'),
    this.use('hover')
  );
}
