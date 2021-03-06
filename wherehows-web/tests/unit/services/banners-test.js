import { moduleFor, test } from 'ember-qunit';

moduleFor('service:banners', 'Unit | Service | banners', {});

test('it exists', function(assert) {
  const service = this.subject();
  assert.ok(service, 'Existence is a good start');
});

test('it operates correctly', async function(assert) {
  const service = this.subject();
  const message = 'Ash Ketchum from Pallet Town';

  service.addBanner('Ash Ketchum from Pallet Town', 'info');

  assert.equal(service.banners.length, 1, 'Created a banner');
  assert.equal(service.banners[0].content, message, 'Creates a banner with the right message');
  assert.equal(service.banners[0].isDismissable, true, 'Creates a banner with the right dismiss');

  await service.dequeue().then(() => {
    assert.equal(service.banners.length, 0, 'Removes a banner correctly');
  });
});
