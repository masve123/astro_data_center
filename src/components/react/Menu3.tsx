import { forwardRef } from 'react';

export const Menu3 = forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} {...props}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>
        <strong>Payments</strong>
        <ul>
          <li>Online payments</li>
          <li>Checkout</li>
          <li>Elements</li>
          <li>Payment Links</li>
          <li>Radar</li>
          <li>Connect</li>
        </ul>
      </li>
    </ul>
  </section>
));

export default Menu3;
