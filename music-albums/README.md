# Chapter 5: Part 4 - Add PropTypes to album lab

## Objectives
* Update AlbumCardList and Album to use PropTypes
  
## Steps:

1. Add PropTypes to your project using:

  ```
  npm install prop-types
  ```

1. Open the AlbumCardList component. Then import PropTypes to it. You can use the ES7 shortcuts to find the correct shortcut to add the import statement.

1.  At the bottom of your code, define an AlbumCardList.propTypes

1. You can use ES7 Snippets to quickly add PropTypes values. First create the property, then start typing pt and pause - the list should appear.

  * pts is for string
  * ptsr is for a required string

```js

































  //This is a snippet of code from AlbumCardList.js   


  const albumArray = props.albumCards;

  const albumItems = albumArray.map(album => {
    return <AlbumCard key={album.id} albumInfo={album} />;
  });

  return (
    <div className="container-fluid">
      <div className="row">
        {albumItems}
      </div>
   ```



    If you need help refer to the slides, talk to fellow students or ask instructor.