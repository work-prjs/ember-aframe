import AEntity from 'ember-a-frame/components/a-entity';
import { task, timeout } from 'ember-concurrency';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import RSVP from 'rsvp';

export default AEntity.extend({
  attributeBindings: [
  ],

  geometry: 'primitive: plane; height: 1; width: 1',
  material: 'shader: flat',

  hover: task(function * () {
    return yield new RSVP.Promise(resolve => {
      let t = transition().duration(500);
      select(this.element)
      .data([1])
	.enter()
      .transition(t).attrTween('position', () => {
        return t => {
          return `${t} 1 0`;
        };
      }).on('end', resolve);
      // select(this.element).on('change', () => {
      //   select(this.element).transition(t).attrTween('position', () => {
      //     return t => {
      //       return `${t} 1 0`;
      //     };
      //   }).on('end', resolve);
      // });
      // select(this.element).dispatch('change');
    });
  }).on('didInsertElement')
});
