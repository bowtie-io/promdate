Handlebars.registerHelper('section', function(type, options){
  if(this.type == type){ return options.fn(this); }
});

Handlebars.registerHelper('sectionClasses', function(options){
  var class_list = this.classes.slice(0);

  if(this.style){
    class_list.push(this.style);
  }

  if(this.layout){
    class_list.push(this.layout);
  }

  if(this.background){
    if(this.background.parallax){
      class_list.push('parallax');
    }

    if(this.background.attachment){
      class_list.push(this.background.attachment);
    }
  }

  return class_list.join(" ");
});

Handlebars.registerHelper('navItemClasses', function(options){
  if(this.action == 'sign_in' || this.action == 'sign_up'){
    return "signed-out";
  }else if(this.action == 'sign_out' || this.action == 'account'){
    return "signed-in";
  }
});

Handlebars.registerHelper('sectionBackground', function(options){
  if(this.background && this.background.image && this.background.image.url){
    return "background-image:url(" + this.background.image.url + ") !important;";
  }
});

Handlebars.registerHelper('or', function(first, second, options){
  return (first ? first : second);
});
