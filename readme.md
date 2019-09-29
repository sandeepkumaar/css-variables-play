## css 

### css layouts

flex-box for one-dimensional layouts ie. either horizontal or vertically
stacked elements 


css-grids for two-dimensional layouts 


Possible use cases:
use flex for small contained components
Eg: icon and content
it can either stack elements horizontally or vertically
always no-wrap. can control thru flex-direction: column, row.

if it needs more than this, go for grids.
suitable for list layouts, as list are 1d default

use grids for laying out independent components in the webpage.
The components are independent that they can *laid out* in whichever order they want
suitable for app-shell layouts 



CSS grids: 
Possibilities:

we can have xy's with varible sizes in the graph
we can name an area and *place* an component on it and interchange when needed


in flex, the content decides the size and length of the layout. It can extend.
in grid, the layout is *fixed*. and components are placed inside them. 


### Note 
use css variables only the properties change 
- dynamically at runtime
- when a property is used across different classes

How to assign value
- thru js
- thru class. parent, self

### Steps
experiment css-custom properties with flex list. 
- re-usablity
- flexibility
- on media queries. dynamic layout changes

once a thorough understanging of css custom properties. move to css grids 
app-shell layout,
include other components.


last, transitions and animations

## Ref
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout

flex - expandable 1d layout, content decides
grid - fixed layout, grid area decides

grid support for positioned elements






