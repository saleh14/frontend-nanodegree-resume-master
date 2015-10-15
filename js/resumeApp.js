 
var Module = {
    init: function() {
        this.resume = {
            "bio": bio,
            "work": work,
            "education": education,
            "projects": projects
        };
    }
}

var Control = {
    init: function() {
        Module.init();
        View.init();

    },
    getBioObj:function() {
        return Module.resume.bio;
    },
    getWorkObj: function() {
        return Module.work;
    }
}


var View = {
    init: function() {
        HTMLTemplates.init();
        this.initBoiView();
    },
    initBoiView: function() {
        BoiView.init();
    },
    initWorkView: function() {
        WorkView.init();
    }
}

// HTML templates

var HTMLTemplates = {
    init: function() {
        
        this.HTMLheaderName = '<h1 id="name">%data%</h1>';
        this.HTMLheaderRole = '<span>%data%</span><hr/>';

        this.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
        this.HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
        this.HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
        this.HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
        this.HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
        this.HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
        this.HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

        this.HTMLbioPic = '<img src="%data%" class="biopic">';
        this.HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

    }
}


// Views:
var BoiView = {
    init: function() {
        var bio = Control.getBioObj();
        this.nameElm  = HTMLTemplates.HTMLheaderName.replace("%data%",
                bio.name);
        this.roleElm = HTMLTemplates.HTMLheaderRole.replace("%data%",
                bio.role);

        this.topContactsContainer = $("#topContacts");
        this.footerContactsContainer = $("#footerContacts");
        this.headerContainer = $("#header");
        this.contactsElm = "";

        for (var contact in bio.contacts) {
            if (contact === "email") {
                this.contactsElm += HTMLTemplates.HTMLemail.replace(/%data%/g,
                        bio["contacts"][contact]);
            } else {
                this.contactsElm += HTMLTemplates.HTMLcontactGeneric.
                    replace("%contact%", contact);
                this.contactsElm = this.contactsElm.
                    replace("%data%", bio["contacts"][contact]);
            }

    }
        this.bioPicElm = HTMLTemplates.HTMLbioPic.replace("%data%",bio.photo);
        this.welcomeMsgElm = HTMLTemplates.HTMLWelcomeMsg.replace("%data%", 
                bio.welcomeMessage);
        this.render();
    },
    render: function() {
        this.headerContainer.append(this.nameElm);
        this.headerContainer.append(this.roleElm);
        this.topContactsContainer.append(this.contactsElm);
        this.footerContactsContainer.append(this.contactsElm);
        this.headerContainer.append(this.bioPicElm);
        this.headerContainer.append(this.welcomeMsgElm);
    }
}


