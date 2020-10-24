# Bounding boxes limitations

HitboxJS uses the Bounding box system to handle collisions. This means that each element is considered as an horizontal rectangle.

If you have a non-rectangular object, like a circle or a rotated rectangle, its collisions will be detected by **a rectangle bounding the element**, the _hitbox**.**_

<table>
  <thead>
    <tr>
      <th style="text-align:left">
        <p></p>
        <p>
          <img src="../.gitbook/assets/debug1.png" alt="Regular rectangles: the hitbox fits perfectly"
          />
        </p>
      </th>
      <th style="text-align:left">
        <p></p>
        <p>
          <img src="../.gitbook/assets/debug2 (1).png" alt/>
        </p>
      </th>
      <th style="text-align:left">
        <p></p>
        <p>
          <img src="../.gitbook/assets/bounding3 (2).png" alt/>
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><em>Rectangle elements: the hitbox fits perfectly</em>
      </td>
      <td style="text-align:left"><em>Rotated rectangle: The hitbox is a rectangle bounding it.</em>
      </td>
      <td style="text-align:left"><em>Circle: The hitbox is a rectangle bounding it.</em>
      </td>
    </tr>
  </tbody>
</table>

This may create unwanted collision detection. To address a part of the problem, you can use [conditional detection](../advanced/conditional-detection.md) with a minimum overlap to trigger the event.

