AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const PostersRef = [
        {
          id: "iron-man",
          title: "Ironman",
          url: "./assets/ironman.jpg",
        },
        {
          id: "Super-man",
          title: "Superman",
          url: "./assets/Superman.jpg",
        },
        {
          id: "Bat-man",
          title: "Batman",
          url: "./assets/Batman.jpg",
        },
        {
          id: "aqua-man",
          title: "Aquaman",
          url: "./assets/aquaman.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of PostersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
  
       
        // Thumbnail Element
        const Poster=this.createPoster(item)
        // Title Text Element
        
  
        const titleEl = this.createTitleEl(position, item);
        Poster.appendChild(titleEl);
  
        this.placesContainer.appendChild(Poster);
      }
    },
    createPoster:function(item){
      const el=document.createElement('a-entity')
      el.setAttribute('visible',true)
      el.setAttribute('geometry',{
        primitive:"plane",
        width:20,
        height:28
      })
      el.setAttribute("position",{x: 0,y: 5,z: 0.1})
      el.setAttribute('material',{src: item.url})
  return el
    },
   createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
  });
  