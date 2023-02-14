const redirectsMapping = [
    {
      oldURL: "https://www.library.ucla.edu/staff/vasean-everett",
      newURL: "https://www.library.ucla.edu/about/staff/vasean-everett"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/harold-pichol",
      newURL: "https://www.library.ucla.edu/about/staff/harold-pichol"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/zoe-tucker",
      newURL: "https://www.library.ucla.edu/about/staff/zoe-tucker"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-instructors/request-instruction-session",
      newURL: "https://www.library.ucla.edu/help/services-resources/request-an-instruction-session-or-instructional-consultation"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/research-data-services",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-data-services"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/computers-computing-services/lux-lab/equipment-information",
      newURL: "https://www.library.ucla.edu/help/services-resources/lux-lab-equipment-information"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/lux-lab-yrl",
      newURL: "https://www.library.ucla.edu/visit/locations/data-science-center/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/sel/key-resources/journal-articles-conference-papers",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/social-science-data-archive/data-archive-catalog",
      newURL: "https://www.library.ucla.edu/help/services-resources/social-science-data-archive-and-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-instructors/library-teaching-toolkit",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-teaching-toolkit"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel/resources-subject",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/science-engineering-library/key-resources/e-books-reference-sources",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/east-asian-library-richard-c-rudolph/korean-studies",
      newURL: "https://www.library.ucla.edu/help/services-resources/korean-studies-collection"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/items-not-shelf-or-checked-out/find-missing-item",
      newURL: "https://www.library.ucla.edu/help/services-resources/find-a-missing-item"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/course-reserves/information-instructors",
      newURL: "https://www.library.ucla.edu/help/services-resources/course-reserves-for-instructors"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/computers-computing-services/wi-fi",
      newURL: "https://www.library.ucla.edu/help/services-resources/wireless-network-access-wi-fi"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/computers-computing-services/connect-campus",
      newURL: "https://www.library.ucla.edu/help/services-resources/connect-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/access-privileges/library-cards",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-cards"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/southern-regional-library-facility/how-request-items-stored-srlf",
      newURL: "https://www.library.ucla.edu/help/services-resources/how-to-request-items-stored-in-the-srlf"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/teaching-special-collections",
      newURL: "https://www.library.ucla.edu/help/services-resources/teaching-with-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/requesting-duplication-lsc-materials",
      newURL: "https://www.library.ucla.edu/help/services-resources/request-duplication-of-lsc-materials"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-writing",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-and-writing-help-space"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/powell-library/request-event-or-exhibit-powell",
      newURL: "https://www.library.ucla.edu/help/services-resources/request-an-event-or-exhibit-at-powell"
    },
    {
      oldURL: "https://www.library.ucla.edu/arts-library-collections-access-services-during-seismic-construction-closure",
      newURL: "https://www.library.ucla.edu/help/arts-library-collections-access-and-services-during-seismic-construction-closure"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/powell-library/request-event-or-exhibit-powell",
      newURL: "https://www.library.ucla.edu/help/services-resources/request-an-event-or-exhibit-at-powell/"
    },
    {
      oldURL: "https://www.library.ucla.edu/content/caroline-ribakoff-miller",
      newURL: "https://www.library.ucla.edu/about/staff/caroline-r-miller"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/juan-gallegos",
      newURL: "https://www.library.ucla.edu/about/staff/juan-gallegos"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/anthony-bautista",
      newURL: "https://www.library.ucla.edu/about/staff/anthony-bautista"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/martha-steele",
      newURL: "https://www.library.ucla.edu/about/staff/martha-steele"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/francesca-marineo",
      newURL: "https://www.library.ucla.edu/about/staff/francesca-marineo"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/garden-commons",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/cafe-451",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/studio",
      newURL: "https://www.library.ucla.edu/help/services-resources/studio-a-music-kits"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/inqdesk",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/graduate-reading-room",
      newURL: "https://www.library.ucla.edu/help/services-resources/biomedical-library-graduate-reading-room"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/sel-learning-commons",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/biomedical-library-bookable-spaces",
      newURL: "https://www.library.ucla.edu/visit/locations/biomed/"
    },
    {
      oldURL: "https://www.library.ucla.edu/biomed/at-this-location",
      newURL: "https://www.library.ucla.edu/visit/locations/biomed/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/reading-room",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/west-classroom",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/research-commons-rc-classroom",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/research-commons",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/clicc-computer-lab",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/study-rooms",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/east-rotunda",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/seminar-room",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/rose-gilbert-reading-room",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/reading-room-0",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/main-reading-room",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/classroom",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/southern-regional-library-facility",
      newURL: "https://www.library.ucla.edu/visit/locations/southern-regional-library-facility"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/film-television-archive-research-study-center",
      newURL: "https://www.library.ucla.edu/visit/locations/arsc/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/music-library",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/arts-library",
      newURL: "https://www.library.ucla.edu/visit/locations/arts-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/william-andrews-clark-memorial-library",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/ralph-j-bunche-center-african-american-studies-library-media-center",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/law-library-hugh-hazel-darling",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/informations-studies-lab",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/gonda-family-library",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/ethnomusicology-archive",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/english-reading-room",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/chicano-studies-research-center-library",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/asian-american-studies-center-libraryreading-room",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/american-indian-studies-center-library",
      newURL: "https://www.library.ucla.edu/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kimber-thomas",
      newURL: "https://www.library.ucla.edu/about/staff/kimber-thomas/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joanne-powers",
      newURL: "https://www.library.ucla.edu/about/staff/joanne-powers"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/chen-gao",
      newURL: "https://www.library.ucla.edu/about/staff/chen-gao-%E9%AB%98%E6%99%A8"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/eugene-hatch",
      newURL: "https://www.library.ucla.edu/about/staff/eugene-hatch"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/erica-zhang",
      newURL: "https://www.library.ucla.edu/about/staff/erica-zhang"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/emily-dovan",
      newURL: "https://www.library.ucla.edu/about/staff/emily-dovan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/emilee-herrera",
      newURL: "https://www.library.ucla.edu/about/staff/emilee-herrera"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/elizabeth-s-w-mcaulay",
      newURL: "https://www.library.ucla.edu/about/staff/elizabeth-mcaulay"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/elizabeth-rodriguez",
      newURL: "https://www.library.ucla.edu/about/staff/elizabeth-rodriguez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/elizabeth-hodis",
      newURL: "https://www.library.ucla.edu/about/staff/elizabeth-babette-hodis"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/elisia-cardona",
      newURL: "https://www.library.ucla.edu/about/staff/elisia-cardona/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/edwin-dagdagan",
      newURL: "https://www.library.ucla.edu/about/staff/edwin-dagdagan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/edward-kip-hannan",
      newURL: "https://www.library.ucla.edu/about/staff/edward-kip-hannan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/douglas-ishimaru",
      newURL: "https://www.library.ucla.edu/about/staff/douglas-ishimaru"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/douglas-arthur-daniels",
      newURL: "https://www.library.ucla.edu/about/staff/doug-daniels"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/doris-wang",
      newURL: "https://www.library.ucla.edu/about/staff/doris-wang"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/diane-mizrachi",
      newURL: "https://www.library.ucla.edu/about/staff/diane-mizrachi"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/devin-mattlin",
      newURL: "https://www.library.ucla.edu/about/staff/devin-mattlin"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/devin-fitzgerald",
      newURL: "https://www.library.ucla.edu/about/staff/devin-fitzgerald"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dawn-childress",
      newURL: "https://www.library.ucla.edu/about/staff/dawn-childress"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/david-t-rickard",
      newURL: "https://www.library.ucla.edu/about/staff/david-t-rickard"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/david-scholl",
      newURL: "https://www.library.ucla.edu/about/staff/dave-scholl/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/david-s-poepoe",
      newURL: "https://www.library.ucla.edu/about/staff/david-poepoe"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/david-lakatta",
      newURL: "https://www.library.ucla.edu/about/staff/david-lakatta"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/david-benitez",
      newURL: "https://www.library.ucla.edu/about/staff/david-benitez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/darren-diaz",
      newURL: "https://www.library.ucla.edu/about/staff/darren-diaz"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/daniel-o-contreras",
      newURL: "https://www.library.ucla.edu/about/staff/daniel-contreras"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dana-s-iwata",
      newURL: "https://www.library.ucla.edu/about/staff/dana-iwata"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dana-poss",
      newURL: "https://www.library.ucla.edu/about/staff/dana-poss"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dana-peterman",
      newURL: "https://www.library.ucla.edu/about/staff/dana-peterman"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dalena-hunter",
      newURL: "https://www.library.ucla.edu/about/staff/dalena-hunter"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/cynthia-perez-huerta",
      newURL: "https://www.library.ucla.edu/about/staff/cynthia-perez-huerta"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/courtney-jet-jacobs",
      newURL: "https://www.library.ucla.edu/about/staff/courtney-jet-jacobs"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/courtney-hoffner",
      newURL: "https://www.library.ucla.edu/about/staff/courtney-hoffner/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/courtney-dean",
      newURL: "https://www.library.ucla.edu/about/staff/courtney-dean"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/courtney-alston",
      newURL: "https://www.library.ucla.edu/about/staff/courtney-alston"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/consuela-chela-g-metzger",
      newURL: "https://www.library.ucla.edu/about/staff/consuela-chela-metzger"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/claudia-horning",
      newURL: "https://www.library.ucla.edu/about/staff/claudia-horning"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/christopher-m-brennan",
      newURL: "https://www.library.ucla.edu/about/staff/christopher-brennan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/christine-m-barone",
      newURL: "https://www.library.ucla.edu/about/staff/christine-barone"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/charlie-h-castro",
      newURL: "https://www.library.ucla.edu/about/staff/charlie-h-castro"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/carlo-medina",
      newURL: "https://www.library.ucla.edu/about/staff/carlo-medina"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/calandra-holmes",
      newURL: "https://www.library.ucla.edu/about/staff/callie-holmes"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/bryce-lowe",
      newURL: "https://www.library.ucla.edu/about/staff/bryce-lowe"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/brooke-contreras",
      newURL: "https://www.library.ucla.edu/about/staff/brooke-contreras"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/brigid-abreu",
      newURL: "https://www.library.ucla.edu/about/staff/brigid-abreu"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/blake-navarrette",
      newURL: "https://www.library.ucla.edu/about/staff/blake-navarrette"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/beverly-scott",
      newURL: "https://www.library.ucla.edu/about/staff/beverly-scott"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ben-alkaly",
      newURL: "https://www.library.ucla.edu/about/staff/ben-alkaly"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ayesha-ticzon",
      newURL: "https://www.library.ucla.edu/about/staff/ayesha-ticzon/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ashton-prigge",
      newURL: "https://www.library.ucla.edu/about/staff/ashton-prigge/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/araceli-bermudez",
      newURL: "https://www.library.ucla.edu/about/staff/araceli-bermudez/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/antonia-osuna-garcia",
      newURL: "https://www.library.ucla.edu/about/staff/antonia-osuna-garcia"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/antigone-kutay",
      newURL: "https://www.library.ucla.edu/about/staff/antigone-kutay"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/annie-watanabe-rocco",
      newURL: "https://www.library.ucla.edu/about/staff/annie-a-watanabe-rocco"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/annette-doss",
      newURL: "https://www.library.ucla.edu/about/staff/annette-doss"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/anju-mitchell",
      newURL: "https://www.library.ucla.edu/about/staff/anju-mitchell"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/angela-k-horne",
      newURL: "https://www.library.ucla.edu/about/staff/angela-k-horne"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/angela-allen",
      newURL: "https://www.library.ucla.edu/about/staff/angela-allen"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/andrew-wallace",
      newURL: "https://www.library.ucla.edu/about/staff/andrew-wallace/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/andrew-perrine",
      newURL: "https://www.library.ucla.edu/about/staff/andrew-perrine"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/andrew-c-kohler",
      newURL: "https://www.library.ucla.edu/about/staff/andrew-c-kohler"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/amy-wong",
      newURL: "https://www.library.ucla.edu/about/staff/amy-wong"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/aminatun-baxley",
      newURL: "https://www.library.ucla.edu/about/staff/ami-baxley"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/amanda-mack",
      newURL: "https://www.library.ucla.edu/about/staff/amanda-mack"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/allie-whalen",
      newURL: "https://www.library.ucla.edu/about/staff/allie-whalen"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alison-scott",
      newURL: "https://www.library.ucla.edu/about/staff/alison-scott"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alicia-amador",
      newURL: "https://www.library.ucla.edu/about/staff/alicia-amador/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alice-nguyen",
      newURL: "https://www.library.ucla.edu/about/staff/alice-nguyen"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alice-hunt",
      newURL: "https://www.library.ucla.edu/about/staff/alice-hunt"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alexander-mcghee",
      newURL: "https://www.library.ucla.edu/about/staff/alexander-mcghee"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alesia-m-haymon",
      newURL: "https://www.library.ucla.edu/about/staff/alesia-m-haymon"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alena-aissing",
      newURL: "https://www.library.ucla.edu/about/staff/alena-aissing"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kathy-brown",
      newURL: "https://www.library.ucla.edu/about/staff/kathy-brown"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kathryn-m-ombao",
      newURL: "https://www.library.ucla.edu/about/staff/kathryn-ombao"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/katherine-kapsidelis",
      newURL: "https://www.library.ucla.edu/about/staff/katherine-kapsidelis/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kara-molitor",
      newURL: "https://www.library.ucla.edu/about/staff/kara-molitor"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/junko-tanaka",
      newURL: "https://www.library.ucla.edu/about/staff/junko-tanaka-%E7%94%B0%E4%B8%AD%E9%A0%86%E5%AD%90"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/julian-j-calero",
      newURL: "https://www.library.ucla.edu/about/staff/julian-calero"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joshua-gomez",
      newURL: "https://www.library.ucla.edu/about/staff/jgomez/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joseph-yue",
      newURL: "https://www.library.ucla.edu/about/staff/joseph-yue"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joseph-orellana",
      newURL: "https://www.library.ucla.edu/about/staff/joseph-orellana"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joseph-g-andrews",
      newURL: "https://www.library.ucla.edu/about/staff/joseph-andrews"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joseph-babi",
      newURL: "https://www.library.ucla.edu/about/staff/joseph-babi"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jonathan-wilson",
      newURL: "https://www.library.ucla.edu/about/staff/jonathan-wilson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jonathan-fahn",
      newURL: "https://www.library.ucla.edu/about/staff/jonathan-fahn"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jon-edmondson",
      newURL: "https://www.library.ucla.edu/about/staff/jon-edmondson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/john-robinson",
      newURL: "https://www.library.ucla.edu/about/staff/john-robertson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/john-j-riemer",
      newURL: "https://www.library.ucla.edu/about/staff/john-riemer"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joanna-hong",
      newURL: "https://www.library.ucla.edu/about/staff/joanna-hong"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joanna-flores",
      newURL: "https://www.library.ucla.edu/about/staff/joana-flores"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/joan-sutton",
      newURL: "https://www.library.ucla.edu/about/staff/joan-sutton"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jina-jamie-jamison",
      newURL: "https://www.library.ucla.edu/about/staff/jina-jamie-jamison/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jimmy-zavala",
      newURL: "https://www.library.ucla.edu/about/staff/jimmy-zavala"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jillian-borders",
      newURL: "https://www.library.ucla.edu/about/staff/jillian-borders"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jessica-s-mentesoglu",
      newURL: "https://www.library.ucla.edu/about/staff/jessica-selma-mentesoglu"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jennifer-rhee",
      newURL: "https://www.library.ucla.edu/about/staff/jennifer-rhee"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jennifer-osorio",
      newURL: "https://www.library.ucla.edu/about/staff/jennifer-osorio/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jennifer-diamond",
      newURL: "https://www.library.ucla.edu/about/staff/jennifer-diamond/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jennifer-chan",
      newURL: "https://www.library.ucla.edu/about/staff/jennifer-chan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jeffrey-bickel",
      newURL: "https://www.library.ucla.edu/about/staff/jeffrey-bickel"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jeannette-tammy-baca-montanez",
      newURL: "https://www.library.ucla.edu/about/staff/jeannette-tammy-baca-montanez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jason-burton",
      newURL: "https://www.library.ucla.edu/about/staff/jason-burton"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jasmine-larkin",
      newURL: "https://www.library.ucla.edu/about/staff/jasmine-larkin"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jasmine-jones",
      newURL: "https://www.library.ucla.edu/about/staff/jasmine-jones"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jane-collings",
      newURL: "https://www.library.ucla.edu/about/staff/jane-collings"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jana-falcon",
      newURL: "https://www.library.ucla.edu/about/staff/jana-falcon"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/james-smith",
      newURL: "https://www.library.ucla.edu/about/staff/james-smith"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/james-m-anderson",
      newURL: "https://www.library.ucla.edu/about/staff/james-m-anderson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/james-j-fiala",
      newURL: "https://www.library.ucla.edu/about/staff/josh-fiala"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jaime-gomez",
      newURL: "https://www.library.ucla.edu/about/staff/jaime-gomez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jade-alburo",
      newURL: "https://www.library.ucla.edu/about/staff/jade-alburo"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ivette-weyman",
      newURL: "https://www.library.ucla.edu/about/staff/ivette-weyman"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/iman-dagher",
      newURL: "https://www.library.ucla.edu/about/staff/iman-dagher"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ibraheem-ali",
      newURL: "https://www.library.ucla.edu/about/staff/ibraheem-ali-phd"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ian-kinzler",
      newURL: "https://www.library.ucla.edu/about/staff/ian-a-kinzler"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/hui-li",
      newURL: "https://www.library.ucla.edu/about/staff/hui-li-%E6%9D%8E%E6%85%A7"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/hong-cheng",
      newURL: "https://www.library.ucla.edu/about/staff/hong-cheng/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/hermine-e-vermeij",
      newURL: "https://www.library.ucla.edu/about/staff/hermine-vermeij"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/henry-lim",
      newURL: "https://www.library.ucla.edu/about/staff/henry-lim"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/hannah-sutherland",
      newURL: "https://www.library.ucla.edu/about/staff/hannah-sutherland"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/hamed-alipoormiandehi",
      newURL: "https://www.library.ucla.edu/about/staff/hamed-alipoormiandehi"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/gregory-ramsey",
      newURL: "https://www.library.ucla.edu/about/staff/gregory-ramsey"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/gissel-rios",
      newURL: "https://www.library.ucla.edu/about/staff/gissel-rios"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/gillian-bailey",
      newURL: "https://www.library.ucla.edu/about/staff/gillian-bailey"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/geno-sanchez",
      newURL: "https://www.library.ucla.edu/about/staff/geno-sanchez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/genie-guerard",
      newURL: "https://www.library.ucla.edu/about/staff/genie-guerard"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/gabriela-j-bueno",
      newURL: "https://www.library.ucla.edu/about/staff/gabriela-bueno"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/gabriel-cardenas",
      newURL: "https://www.library.ucla.edu/about/staff/gabe-cardenas"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/evan-zeman-manzanetti",
      newURL: "https://www.library.ucla.edu/about/staff/evan-manzanetti/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kj-relth",
      newURL: "https://www.library.ucla.edu/about/staff/k-j-relth-miller"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kevin-sean-clarke",
      newURL: "https://www.library.ucla.edu/about/staff/kevin-s-clarke/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kevin-m-balster",
      newURL: "https://www.library.ucla.edu/about/staff/kevin-balster"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kelly-besser",
      newURL: "https://www.library.ucla.edu/about/staff/kelly-besser"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/keith-okamura",
      newURL: "https://www.library.ucla.edu/about/staff/keith-okamura"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/axa-liauw",
      newURL: "https://www.library.ucla.edu/about/staff/axa-liauw/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/parinita-mulak",
      newURL: "https://www.library.ucla.edu/about/staff/parinita-mulak/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/renee-romero",
      newURL: "https://www.library.ucla.edu/about/staff/renee-romero"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/estefani-bowline",
      newURL: "https://www.library.ucla.edu/about/staff/estefani-bowline"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/christopher-murphy",
      newURL: "https://www.library.ucla.edu/about/staff/chris-murphy"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/christopher-gilman",
      newURL: "https://www.library.ucla.edu/about/staff/christopher-gilman"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/may-hong-haduong",
      newURL: "https://www.library.ucla.edu/about/staff/may-hong-haduong"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/anthony-vuong",
      newURL: "https://www.library.ucla.edu/about/staff/anthony-vuong"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/dianne-weinthal",
      newURL: "https://www.library.ucla.edu/about/staff/dianne-weinthal/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/emoon-mar",
      newURL: "https://www.library.ucla.edu/about/staff/emoon-mar/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jw-clark",
      newURL: "https://www.library.ucla.edu/about/staff/jw-clark"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/brian-belak",
      newURL: "https://www.library.ucla.edu/about/staff/brian-belak"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lauren-roxanne-brown",
      newURL: "https://www.library.ucla.edu/about/staff/lauren-roxanne-brown"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/cathy-akers",
      newURL: "https://www.library.ucla.edu/about/staff/cathy-akers"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sohaib-baig",
      newURL: "https://www.library.ucla.edu/about/staff/sohaib-baig"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/brice-smither",
      newURL: "https://www.library.ucla.edu/about/staff/brice-smither"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/megan-richardson",
      newURL: "https://www.library.ucla.edu/about/staff/megan-richardson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/zoe-borovsky",
      newURL: "https://www.library.ucla.edu/about/staff/zoe-borovsky"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/yun-hee-lee",
      newURL: "https://www.library.ucla.edu/about/staff/yun-hee-lee-%EC%9D%B4%EC%9C%A4%ED%9D%AC"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/yasmin-dessem",
      newURL: "https://www.library.ucla.edu/about/staff/yasmin-dessem"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/william-hackenberg",
      newURL: "https://www.library.ucla.edu/about/staff/william-hackenberg"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/wil-william-lin",
      newURL: "https://www.library.ucla.edu/about/staff/wil-lin"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/wallace-meek",
      newURL: "https://www.library.ucla.edu/about/staff/wallace-meek"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/virginia-steel",
      newURL: "https://www.library.ucla.edu/about/staff/virginia-steel"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/victoria-puente",
      newURL: "https://www.library.ucla.edu/about/staff/tori-puente"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/valeria-hernandez",
      newURL: "https://www.library.ucla.edu/about/staff/valeria-hernandez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tula-orum",
      newURL: "https://www.library.ucla.edu/about/staff/tula-orum"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tom-d-rosholt",
      newURL: "https://www.library.ucla.edu/about/staff/tom-rosholt/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/todd-wiener",
      newURL: "https://www.library.ucla.edu/about/staff/todd-wiener"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/todd-c-grappone",
      newURL: "https://www.library.ucla.edu/about/staff/todd-c-grappone"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tin-tran",
      newURL: "https://www.library.ucla.edu/about/staff/tin-tran"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tim-wilson",
      newURL: "https://www.library.ucla.edu/about/staff/tim-wilson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tim-dennis",
      newURL: "https://www.library.ucla.edu/about/staff/tim-dennis/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tiffany-may",
      newURL: "https://www.library.ucla.edu/about/staff/tiffany-may"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/teresa-l-barnett",
      newURL: "https://www.library.ucla.edu/about/staff/teresa-l-barnett"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/t-kay-sangwand",
      newURL: "https://www.library.ucla.edu/about/staff/t-kay-sangwand"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sylvia-page",
      newURL: "https://www.library.ucla.edu/about/staff/sylvia-page/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/suzy-lee",
      newURL: "https://www.library.ucla.edu/about/staff/suzy-lee/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/su-chen",
      newURL: "https://www.library.ucla.edu/about/staff/su-chen-%E9%99%B3%E8%82%85"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/steven-hill",
      newURL: "https://www.library.ucla.edu/about/staff/steven-hill"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/stephen-e-gurnick",
      newURL: "https://www.library.ucla.edu/about/staff/stephen-e-gurnick"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/stephanie-kimura",
      newURL: "https://www.library.ucla.edu/about/staff/stephanie-kimura"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/stacy-mckenna",
      newURL: "https://www.library.ucla.edu/about/staff/stacy-mckenna"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/staci-hogsett",
      newURL: "https://www.library.ucla.edu/about/staff/staci-hogsett"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/simon-v-elliott",
      newURL: "https://www.library.ucla.edu/about/staff/simon-v-elliott"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/simon-lee",
      newURL: "https://www.library.ucla.edu/about/staff/simon-lee"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/shira-peltzman",
      newURL: "https://www.library.ucla.edu/about/staff/shira-peltzman"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sherry-wickware",
      newURL: "https://www.library.ucla.edu/about/staff/sherry-wickware"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sharon-m-shafer",
      newURL: "https://www.library.ucla.edu/about/staff/sharon-shafer"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sharon-farb",
      newURL: "https://www.library.ucla.edu/about/staff/sharon-farb/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sharon-b-benamou",
      newURL: "https://www.library.ucla.edu/about/staff/sharon-benamou"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/shannon-tanhayi-ahari",
      newURL: "https://www.library.ucla.edu/about/staff/shannon-tanhayi-ahari"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/science-libraries-team",
      newURL: "https://www.library.ucla.edu/about/staff/sciences-libraries-team"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/savannah-dawson",
      newURL: "https://www.library.ucla.edu/about/staff/savannah-dawson/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sara-buchting",
      newURL: "https://www.library.ucla.edu/about/staff/sara-buchting"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sanghun-cho",
      newURL: "https://www.library.ucla.edu/about/staff/sanghun-cho-%EC%A1%B0%EC%83%81%ED%9B%88/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sandy-ma",
      newURL: "https://www.library.ucla.edu/about/staff/sandy-ma"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/sandra-farfan-gracia",
      newURL: "https://www.library.ucla.edu/about/staff/sandra-farfan-gracia"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/salma-abumeeiz",
      newURL: "https://www.library.ucla.edu/about/staff/salma-abumeeiz"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/salik-sultan",
      newURL: "https://www.library.ucla.edu/about/staff/salik-sultan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ryan-chandler",
      newURL: "https://www.library.ucla.edu/about/staff/ryan-chandler"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/russell-johnson",
      newURL: "https://www.library.ucla.edu/about/staff/russell-johnson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ruby-bell-gam",
      newURL: "https://www.library.ucla.edu/about/staff/ruby-a-bell-gam"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/rose-miranda",
      newURL: "https://www.library.ucla.edu/about/staff/rose-miranda"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/rosa-m-barker",
      newURL: "https://www.library.ucla.edu/about/staff/rosa-barker/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/robert-gore",
      newURL: "https://www.library.ucla.edu/about/staff/robert-gore"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/rhonda-super",
      newURL: "https://www.library.ucla.edu/about/staff/rhonda-super"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/rene-okamura",
      newURL: "https://www.library.ucla.edu/about/staff/rene-okamura"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/raquel-rivero",
      newURL: "https://www.library.ucla.edu/about/staff/raquel-rivero"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/randy-yantek",
      newURL: "https://www.library.ucla.edu/about/staff/randy-yantek"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/rachel-deblinger",
      newURL: "https://www.library.ucla.edu/about/staff/rachel-deblinger/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/phyllis-blackshear",
      newURL: "https://www.library.ucla.edu/about/staff/phyllis-blackshear"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/peter-v-fletcher",
      newURL: "https://www.library.ucla.edu/about/staff/peter-fletcher"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/paul-priebe",
      newURL: "https://www.library.ucla.edu/about/staff/paul-priebe"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/paul-malcolm",
      newURL: "https://www.library.ucla.edu/about/staff/paul-malcolm"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/patricia-cramer",
      newURL: "https://www.library.ucla.edu/about/staff/pat-cramer"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/paromita-biswas",
      newURL: "https://www.library.ucla.edu/about/staff/paromita-biswas"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/pardis-rahimi",
      newURL: "https://www.library.ucla.edu/about/staff/pardis-rahimi"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/nora-lilit-avetyan",
      newURL: "https://www.library.ucla.edu/about/staff/nora-avetyan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/nelson-o-velasquez",
      newURL: "https://www.library.ucla.edu/about/staff/nelson-velasquez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/neil-hodge",
      newURL: "https://www.library.ucla.edu/about/staff/neil-m-hodge"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/monica-j-hagan",
      newURL: "https://www.library.ucla.edu/about/staff/monica-j-hagan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/monalisa-ruiz",
      newURL: "https://www.library.ucla.edu/about/staff/monalisa-ruiz"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/molly-hemphill",
      newURL: "https://www.library.ucla.edu/about/staff/molly-hemphill"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/molly-haigh",
      newURL: "https://www.library.ucla.edu/about/staff/molly-haigh"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/miki-shannon",
      newURL: "https://www.library.ucla.edu/about/staff/miki-shannon"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/miki-goral",
      newURL: "https://www.library.ucla.edu/about/staff/miki-goral"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/michelle-brasseur",
      newURL: "https://www.library.ucla.edu/about/staff/michelle-brasseur"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/michael-r-oppenheim",
      newURL: "https://www.library.ucla.edu/about/staff/michael-r-oppenheim"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/michael-pazmino",
      newURL: "https://www.library.ucla.edu/about/staff/michael-pazmino"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/michael-kelley",
      newURL: "https://www.library.ucla.edu/about/staff/michael-kelley"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/melina-duenas-perez",
      newURL: "https://www.library.ucla.edu/about/staff/melina-due%C3%B1as-perez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/megan-rosenbloom",
      newURL: "https://www.library.ucla.edu/about/staff/megan-rosenbloom/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/maya-montanez-smukler-0",
      newURL: "https://www.library.ucla.edu/about/staff/maya-monta%C3%B1ez-smukler"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/maxwell-zupke",
      newURL: "https://www.library.ucla.edu/about/staff/maxwell-zupke"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/matthew-vest",
      newURL: "https://www.library.ucla.edu/about/staff/matthew-vest"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/matthew-smith",
      newURL: "https://www.library.ucla.edu/about/staff/matthew-smith"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/matthew-johnson",
      newURL: "https://www.library.ucla.edu/about/staff/matthew-weirick-johnson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/matthew-hewitt",
      newURL: "https://www.library.ucla.edu/about/staff/matthew-hewitt"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/mary-alfaro",
      newURL: "https://www.library.ucla.edu/about/staff/mary-alfaro"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/martin-j-brennan",
      newURL: "https://www.library.ucla.edu/about/staff/martin-brennan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/mark-quigley",
      newURL: "https://www.library.ucla.edu/about/staff/mark-quigley"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/mark-matney",
      newURL: "https://www.library.ucla.edu/about/staff/mark-matney"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/marissa-kings",
      newURL: "https://www.library.ucla.edu/about/staff/marissa-kings-garwig"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/marisa-soto",
      newURL: "https://www.library.ucla.edu/about/staff/marisa-soto"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/maria-jankowska",
      newURL: "https://www.library.ucla.edu/about/staff/maria-a-jankowska"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/marco-tamase",
      newURL: "https://www.library.ucla.edu/about/staff/marco-tamase"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lygia-bagdanovich",
      newURL: "https://www.library.ucla.edu/about/staff/lygia-bagdanovich"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lizeth-ramirez",
      newURL: "https://www.library.ucla.edu/about/staff/lizeth-ramirez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lisa-monhoff",
      newURL: "https://www.library.ucla.edu/about/staff/lisa-monhoff"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lisa-fuguet",
      newURL: "https://www.library.ucla.edu/about/staff/lisa-fuguet"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lilia-sandoval",
      newURL: "https://www.library.ucla.edu/about/staff/lilia-sandoval/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/leo-gonzalez",
      newURL: "https://www.library.ucla.edu/about/staff/leo-gonzalez"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/leigh-phan",
      newURL: "https://www.library.ucla.edu/about/staff/leigh-phan"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lauren-poleski-schultz",
      newURL: "https://www.library.ucla.edu/about/staff/lauren-poleski-schultz"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/laura-e-danielson",
      newURL: "https://www.library.ucla.edu/about/staff/laura-danielson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/lars-r-schumacher",
      newURL: "https://www.library.ucla.edu/about/staff/lars-r-schumacher"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kristin-e-russo",
      newURL: "https://www.library.ucla.edu/about/staff/kristin-russo"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/Abdur-Mahmood",
      newURL: "https://www.library.ucla.edu/about/staff/abdur-mahmood"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/biomedical-library-louise-m-darling",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/support-instructors",
      newURL: "https://www.library.ucla.edu/help/teaching"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/eileen-keegan",
      newURL: "https://www.library.ucla.edu/about/staff/eileen-keegan"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/contact-information",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-special-collections-contact-information-for-reference-instruction-and-donations"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/jeremy-whitt",
      newURL: "https://www.library.ucla.edu/about/staff/jeremy-whitt"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/disability-resources",
      newURL: "https://www.library.ucla.edu/help/services-resources/accessibility-resources"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/lux-lab-powell",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/scholarly-innovation-lab-sil",
      newURL: "https://www.library.ucla.edu/visit/locations/young-research-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/inqdrop",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ariane-bicho",
      newURL: "https://www.library.ucla.edu/about/staff/ariane-bicho"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/east-asian-library-richard-c-rudolph/chinese-studies/chinese-e-resources",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ashleigh-darby",
      newURL: "https://www.library.ucla.edu/about/staff/ashleigh-darby"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/management-library-eugene-maxine-rosenfeld",
      newURL: "https://www.library.ucla.edu/visit/locations/management-library-eugene-maxine-rosenfeld"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/visit-ucla-library/services-general-public",
      newURL: "https://www.library.ucla.edu/help/services-resources/services-for-the-general-public"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/renewing-and-returning-items",
      newURL: "https://www.library.ucla.edu/help/services-resources/borrow-renew-return"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/fees-fines",
      newURL: "https://craft.library.ucla.edu/fees-and-fines-for-borrowed-materials"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/library-payments-online",
      newURL: "https://www.library.ucla.edu/help/services-resources/paying-for-fines-and-fees"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/clicc-equipment-lending",
      newURL: "https://www.library.ucla.edu/help/services-resources/equipment-lending"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/lux-lab",
      newURL: "https://www.library.ucla.edu/help/services-resources/yrl-lux-lab"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/clicc-virtual-desktop",
      newURL: "https://www.library.ucla.edu/help/services-resources/virtual-desktop"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/open-access",
      newURL: "https://www.library.ucla.edu/help/services-resources/open-access-publishing"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/clicc-classrooms",
      newURL: "https://www.library.ucla.edu/help/services-resources/clicc-classrooms"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/interlibrary-loan-ill/information-borrowing-institutions",
      newURL: "https://www.library.ucla.edu/help/services-resources/interlibrary-loan-contact-information"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/interlibrary-loan-ill",
      newURL: "https://www.library.ucla.edu/help/services-resources/interlibrary-loan-ill"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/interlibrary-loan-ill/contact-information",
      newURL: "https://www.library.ucla.edu/help/services-resources/interlibrary-loan-contact-information"
    },
    {
      oldURL: "https://www.library.ucla.edu/datasquad",
      newURL: "https://www.library.ucla.edu/visit/locations/data-science-center&x-craft-preview=Oo8hps00EJ"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/data-science-center/partners",
      newURL: "https://www.library.ucla.edu/help/services-resources/data-science-center-partners"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/policy-regarding-unpublished-materials",
      newURL: "https://www.library.ucla.edu/about/policies/policy-regarding-unpublished-materials"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/powell-library/collections",
      newURL: "https://www.library.ucla.edu/powell-community-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/access-special-collections-reading-room",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-reading-room-policies-and-procedures"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/access-digital-materials",
      newURL: "https://www.library.ucla.edu/about/policies/access-to-lsc-digital-materials"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/dance",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-dance"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/performing-arts-music-film-television-theater",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-performing-arts"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/medieval-renaissance-manuscripts",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-medieval-renaissance-manuscripts"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/punk-music-culture",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-punk"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/destination/center-oral-history-research",
      newURL: "https://www.library.ucla.edu/help/services-resources/center-for-oral-history-research"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/destination/center-oral-history-research",
      newURL: "https://www.library.ucla.edu/about/programs/center-for-oral-history-research"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/rights-toolkit",
      newURL: "https://www.library.ucla.edu/help/services-resources/rights-toolkit/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/policies/appropriate-use-of-licensed-electronic-resources",
      newURL: "https://www.whitehouse.gov/ostp/news-updates/2022/08/25/ostp-issues-guidance-to"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/requesting-duplication-lsc-materials",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-duplication-and-copyright-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/about-ucla-library/want-give-us-feedback",
      newURL: "https://ucla.libwizard.com/f/giveusfeedback"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/information-authors/uc-open-access-policy",
      newURL: "https://www.library.ucla.edu/about/policies/uc-open-access-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/content-advisory-policy",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-content-advisory-policy"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/access-unprocessed-collections-policy",
      newURL: "https://www.library.ucla.edu/about/policies/access-to-unprocessed-lsc-collections-policy"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/university-archives-history-ucla",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collections-development-policies-university-archives"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/history-medicine-sciences",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-history-medicine-sciences"
    },
    {
      oldURL: "https://www.library.ucla.edu/dsc",
      newURL: "https://www.library.ucla.edu/visit/locations/data-science-center/"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policies",
      newURL: "https://www.library.ucla.edu/about/policies/ucla-library-copyright-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/uc-systemwide-copyright-policies",
      newURL: "https://www.library.ucla.edu/about/policies/uc-and-ucla-copyright-information"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/twentieth-twenty-first-century-literature",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-twentieth-twenty-first-century-literature"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/conduct-ucla-libraries",
      newURL: "https://www.library.ucla.edu/about/policies/conduct-in-the-ucla-libraries"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/conduct-ucla-libraries/acceptable-use-policy",
      newURL: "https://www.library.ucla.edu/about/policies/acceptable-use-policy-for-library-public-computers"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/conduct-ucla-libraries/user-rights-responsibilities",
      newURL: "https://www.library.ucla.edu/about/policies/user-rights-and-responsibilities"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/policy-regarding-mediated-copying",
      newURL: "https://www.library.ucla.edu/about/policies/policy-regarding-mediated-copying"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/library-conference-spaces",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-conference-spaces"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/visual-arts",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collection-development-policies-visual-arts"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect/world-histories-cultures",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-collections-development-policies-world-histories-cultures"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/location/university-archives",
      newURL: "https://www.library.ucla.edu/about/programs/university-archives"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collections%3A+Barbados+Ephemera+Collection",
      newURL: "https://meap.library.ucla.edu/projects/barbadian-voices"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/music-library/collections",
      newURL: "https://www.library.ucla.edu/ucla-music-library-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/nicholas-carlozzi",
      newURL: "https://www.library.ucla.edu/about/staff/nicholas-carlozzi"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/rotunda",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/support-students/showcasing-student-achievement/library-prize-undergraduate-research",
      newURL: "https://www.library.ucla.edu/about/programs/library-prize-for-undergraduate-research/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/east-asian-library-richard-c-rudolph/collections",
      newURL: "https://www.library.ucla.edu/east-asian-library-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/destination/history-medicine-sciences",
      newURL: "https://www.library.ucla.edu/history-of-medicine-and-the-sciences-collection"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/music-library/hugo-christine-davise-fund-contemporary-music",
      newURL: "https://www.library.ucla.edu/about/programs/hugo-and-christine-davise-fund-for-contemporary-music"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/about-collections/open-scholarship-collections-policy/affordable-course-materials-initiative",
      newURL: "https://www.library.ucla.edu/about/programs/affordable-course-materials-initiative-acmi"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/inqlab3",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/allison-r-benedetti",
      newURL: "https://www.library.ucla.edu/about/staff/allison-benedetti"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/east-asian",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/destination/university-archives",
      newURL: "https://www.library.ucla.edu/about/programs/university-archives/"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc",
      newURL: "https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/jobs-ucla-library",
      newURL: "https://www.library.ucla.edu/jobs"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/jobs-ucla-library/student-jobs",
      newURL: "https://www.library.ucla.edu/jobs/about-student-jobs"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+L.A.+Rebellion",
      newURL: "https://www.library.ucla.edu/collections/l-a-rebellion-collection/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collections%3A+Get+Used+to+It",
      newURL: "https://www.library.ucla.edu/collections/get-used-to-it/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/toward-ethical-inclusive-descriptive-practices-ucla-library-special-collections/report-potentially-offensive-content-description-library-special-collections",
      newURL: "https://www.library.ucla.edu/about/policies/report-potentially-offensive-content-and-description-in-library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/diana-l-king",
      newURL: "https://www.library.ucla.edu/about/staff/diana-king"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Caro+Minasian+Collection+of+Armenian+Material",
      newURL: "https://www.library.ucla.edu/collections/caro-minasian-collection-of-armenian-material-circa-1600-1968/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Sleepy+Lagoon+Defense+Committee+Records",
      newURL: "https://www.library.ucla.edu/collections/sleepy-lagoon-defense-committee-records-1942-1945/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Patent+Medicine+Trade+Cards",
      newURL: "https://www.library.ucla.edu/collections/patent-medicine-trade-cards/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Kango+Takamura+Paintings",
      newURL: "https://www.library.ucla.edu/collections/takamura-kango-paintings-1942-1945/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Golden+State+Mutual+Life+Insurance+Company+Records",
      newURL: "https://www.library.ucla.edu/collections/golden-state-mutual-life-insurance-company-records/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Miriam+Matthews+Photograph+Collection",
      newURL: "https://www.library.ucla.edu/collections/miriam-matthews-photograph-collection/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Neutra+%28Richard+and+Dion%29+Papers",
      newURL: "https://www.library.ucla.edu/collections/neutra-richard-and-dion-papers/"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collection%3A+Contemporary+Music+Score+Collection",
      newURL: "https://www.library.ucla.edu/collections/neutra-richard-and-dion-papers/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/toward-ethical-inclusive-descriptive-practices-ucla-library-special-collections",
      newURL: "https://www.library.ucla.edu/about/policies/toward-ethical-and-inclusive-descriptive-practices-in-ucla-library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/metadata-rights-statement",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-metadata-rights-statement"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/location/center-primary-research-training-cfprt",
      newURL: "https://www.library.ucla.edu/about/programs/center-for-primary-research-and-training-cfprt"
    },
    {
      oldURL: "https://docs.library.ucla.edu/display/WCE/Featured+Collections%3A+Ramakatane",
      newURL: "https://meap.library.ucla.edu/projects/the-photographer-who-woke-up-from-the-dead/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/powell-library",
      newURL: "https://www.library.ucla.edu/visit/locations/powell-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/what-we-collect",
      newURL: "https://www.library.ucla.edu/about/policies/library-special-collections-principles-for-collecting-material"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/ashley-peterson",
      newURL: "https://www.library.ucla.edu/about/staff/ashley-peterson"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/judith-c-consales",
      newURL: "https://www.library.ucla.edu/about/staff/judith-c-consales"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/kristian-allen",
      newURL: "https://www.library.ucla.edu/about/staff/kristian-allen"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/edson-smith",
      newURL: "https://www.library.ucla.edu/about/staff/edson-smith"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/zhiyuan-yao-spatial-data-science",
      newURL: "https://www.library.ucla.edu/about/staff/zhiyuan-yao"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/giving-library/honor-books",
      newURL: "https://www.library.ucla.edu/honor-with-books"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/giving-library/library-associates",
      newURL: "https://www.library.ucla.edu/powell-society"
    },
    {
      oldURL: "https://www.library.ucla.edu/powell/cluster-program-support",
      newURL: "https://www.library.ucla.edu/help/services-resources/cluster-program-support"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/research-help/attend-virtual-research-workshop",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/giving-library/ways-give",
      newURL: "https://www.library.ucla.edu/give/ways-to-give/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about",
      newURL: "https://www.library.ucla.edu/about-2/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about-ucla-library/about-collections/ucla-library-digital-collections",
      newURL: "https://www.library.ucla.edu/about/programs/digital-library-program/"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/borrower-responsibilities",
      newURL: "https://www.library.ucla.edu/about/policies/borrower-responsibilities"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/making-copies-copyrighted-materials-ucla-library-collections",
      newURL: "https://www.library.ucla.edu/about/policies/making-copies-of-copyrighted-materials-for-ucla-library-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/ucla-library-copyright-policy-library-reserves",
      newURL: "https://www.library.ucla.edu/about/policies/ucla-library-copyright-policy-on-in-library-reserves"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/interlibrary-loan-operations",
      newURL: "https://www.library.ucla.edu/about/policies/interlibrary-loan-operations"
    },
    {
      oldURL: "https://www.library.ucla.edu/content/contact-us",
      newURL: "https://www.library.ucla.edu/help/services-resources/scholarly-communication-services"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/alexandra-solodkaya",
      newURL: "https://www.library.ucla.edu/about/staff/alexandra-solodkaya"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/privacy-policy",
      newURL: "https://www.library.ucla.edu/about/policies/privacy-policy"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/sel-research-commons",
      newURL: "https://www.library.ucla.edu/help/services-resources/stem-collaborative-learning-center"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/research-library-charles-e-young",
      newURL: "https://www.library.ucla.edu/visit/locations/research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/giving-library/collection-endowment-initiative",
      newURL: "https://www.library.ucla.edu/give/collections-endowments-initiative"
    },
    {
      oldURL: "https://www.library.ucla.edu/about-ucla-library/giving-library",
      newURL: "https://www.library.ucla.edu/give/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/online-collections",
      newURL: "https://www.library.ucla.edu/help/services-resources/los-angeles-aqueduct-digital-platform"
    },
    {
      oldURL: "https://www.library.ucla.edu/content/request-purchase",
      newURL: "https://www.library.ucla.edu/help/services-resources/request-a-purchase"
    },
    {
      oldURL: "https://www.library.ucla.edu/wire",
      newURL: "https://www.library.ucla.edu/help/services-resources/writing-instruction-research-education-wi-re/"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel/key-resources/research-guides-subject",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel/key-resources",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel/grey-literature",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/programs-projects/digital-projects-special-collections",
      newURL: "https://www.library.ucla.edu/help/services-resources/digital-projects-for-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/borrow-renew-return/course-reserves/information-students",
      newURL: "https://www.library.ucla.edu/help/services-resources/course-reserves/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/borrowing-special-collections-items-exhibition",
      newURL: "https://www.library.ucla.edu/help/services-resources/borrowing-special-collections-items-for-exhibition"
    },
    {
      oldURL: "https://www.library.ucla.edu/borrow-renew-return",
      newURL: "https://www.library.ucla.edu/help/services-resources/borrow-renew-return"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/print-copy-scan",
      newURL: "https://www.library.ucla.edu/help/services-resources/print-copy-scan"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/copyright-data-publishing/scholarly-communication-services",
      newURL: "https://www.library.ucla.edu/help/services-resources/scholarly-communication-services"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/document-delivery",
      newURL: "https://www.library.ucla.edu/help/services-resources/document-delivery"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/hire-researcher",
      newURL: "https://www.library.ucla.edu/help/services-resources/hire-a-researcher"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/collections/collection-development-initiatives/licensing",
      newURL: "https://www.library.ucla.edu/about/policies/digital-acquisitions-licensing"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/collections/collection-development-initiatives/e-book-value-statement",
      newURL: "https://www.library.ucla.edu/about/policies/e-book-value-statement"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/social-science-data-archive/data-services",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-data-services/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/administration-organization/strategic-directions-2021",
      newURL: "https://www.library.ucla.edu/about-2/strategic-directions"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/shares-program",
      newURL: "https://www.library.ucla.edu/help/services-resources/shares-program"
    },
    {
      oldURL: "https://www.library.ucla.edu/audiovisual-media-playback-equipment",
      newURL: "https://www.library.ucla.edu/help/services-resources/audiovisual-media-playback-equipment"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/print-copy-scan/map-reproduction",
      newURL: "https://www.library.ucla.edu/help/services-resources/map-reproduction"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/research-guides",
      newURL: "https://guides.library.ucla.edu/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/research-fellowships-2022",
      newURL: "https://www.library.ucla.edu/about/programs/library-special-collections-lsc-research-fellowships-2023"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/research-fellowships-2021/past-research-fellows-ucla-library-special-collections",
      newURL: "https://www.library.ucla.edu/about/programs/library-special-collections-lsc-research-fellowships-2023/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/research-fellowships-2022",
      newURL: "https://www.library.ucla.edu/about/programs/library-special-collections-lsc-research-fellowships-2023/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections/"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/lsc-punk-archive",
      newURL: "https://www.library.ucla.edu/library-special-collections-punk-archive"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/about-collections/open-scholarship-collections-policy",
      newURL: "https://www.library.ucla.edu/about/policies/open-scholarship-and-collections-strategy"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/collections/collection-development-initiatives/principles-data-acquisition",
      newURL: "https://www.library.ucla.edu/about/policies/principles-of-data-acquisition"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/arts-library/collections",
      newURL: "https://www.library.ucla.edu/arts-library-collection"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-students/showcasing-student-achievement/library-prize-undergraduate-research/application-procedures",
      newURL: "https://www.library.ucla.edu/about/policies/library-prize-for-undergraduate-research-application-procedures/"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-students/showcasing-student-achievement/library-prize-undergraduate-research/eligibility",
      newURL: "https://www.library.ucla.edu/about/policies/library-prize-for-undergraduate-research-application-procedures/"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/copyright-data-publishing",
      newURL: "https://www.library.ucla.edu/help/copyright-data-publishing/"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-students/showcasing-student-achievement/library-prize-undergraduate-research",
      newURL: "https://www.library.ucla.edu/about/programs/library-prize-for-undergraduate-research"
    },
    {
      oldURL: "https://www.library.ucla.edu/openucla/openucla-affordable-course-materials-initiative-award",
      newURL: "https://www.library.ucla.edu/about/programs/affordable-course-materials-initiative-acmi"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/study-rooms-collaboration-pods",
      newURL: "https://calendar.library.ucla.edu/r/?_ga=2.216054357.217153963.1675357688-1491196333.1675357688"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/848",
      newURL: "https://calendar.library.ucla.edu/r/?_ga=2.71291159.645400694.1675641203-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/clark",
      newURL: "https://clarklibrary.ucla.edu/?_ga=2.115221890.468074061.1675057809-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-services/copyright-classroom",
      newURL: "https://copyright.universityofcalifornia.edu/use/teaching.html"
    },
    {
      oldURL: "https://www.library.ucla.edu/social-science-data-archive",
      newURL: "https://dataverse.harvard.edu/dataverse/ssda_ucla"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc/software",
      newURL: "https://docs.library.ucla.edu/display/LITKB/CLICC+Software+List"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/chinese-e-resources",
      newURL: "https://guides.library.ucla.edu/chinese?_ga=2.57032879.468074061.1675057809-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/japanese-studies-online-resources",
      newURL: "https://guides.library.ucla.edu/japanese?_ga=2.148737714.468074061.1675057809-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/korean-studies-e-resouces",
      newURL: "https://guides.library.ucla.edu/korean?_ga=2.152904252.468074061.1675057809-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/frequently-asked-questions-faq",
      newURL: "https://guides.library.ucla.edu/library-special-collections/faq?_ga=2.102111494.645400694.1675641203-161137075.1627793085"
    },
    {
      oldURL: "https://www.library.ucla.edu/partnerships/modern-endangered-archives-program",
      newURL: "https://meap.library.ucla.edu/"
    },
    {
      oldURL: "https://www.library.ucla.edu/community-commerce-oral-histories-african-american-businesses-los-angeles",
      newURL: "https://sites.google.com/view/ucla-library-blackbusinesses/home?pli=1"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/data-science-center/lariac",
      newURL: "https://storymaps.arcgis.com/stories/d200175d87ca4294bfc9cb32407d311d"
    },
    {
      oldURL: "https://www.library.ucla.edu",
      newURL: "https://www.library.ucla.edu/"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-students/welcome-ucla-library",
      newURL: "https://www.library.ucla.edu/"
    },
    {
      oldURL: "https://www.library.ucla.edu/news-events",
      newURL: "https://www.library.ucla.edu/about/news "
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policies/appropriate-use-licensed-electronic-resources",
      newURL: "https://www.library.ucla.edu/about/policies/appropriate-use-of-licensed-electronic-resources"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/plan-visit/reading-room-access-born-digital-collections",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-reading-room-policies-and-procedures"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/plan-visit/requesting-materials",
      newURL: "https://www.library.ucla.edu/about/policies/lsc-reading-room-policies-and-procedures"
    },
    {
      oldURL: "https://www.library.ucla.edu/service/open-access-policy",
      newURL: "https://www.library.ucla.edu/about/policies/uc-open-access-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/copyright-data-publishing/scholarly-communication-services/university-california-publication-management-system",
      newURL: "https://www.library.ucla.edu/about/policies/uc-open-access-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/service/resources-copyright-publishing-intellectual-property",
      newURL: "https://www.library.ucla.edu/about/policies/ucla-library-copyright-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-resources-education/ucla-library-copyright-policy/ucla-copyright-policies",
      newURL: "https://www.library.ucla.edu/about/policies/ucla-library-copyright-policies"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc?page=Software+List",
      newURL: "https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc?page=Software+Shortcut",
      newURL: "https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/at-this-location/center-primary-research-training-cfprt",
      newURL: "https://www.library.ucla.edu/about/programs/center-for-primary-research-and-training-cfprt"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-students/showcasing-student-achievement/library-prize-undergraduate-research/application-procedure/past-prize-winners",
      newURL: "https://www.library.ucla.edu/about/programs/library-prize-for-undergraduate-research"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/librarians.cfm",
      newURL: "https://www.library.ucla.edu/about/staff"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/renee-romana-romero",
      newURL: "https://www.library.ucla.edu/about/staff/renee-romero"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/shelby-hallman",
      newURL: "https://www.library.ucla.edu/about/staff/shelby-hallman"
    },
    {
      oldURL: "https://www.library.ucla.edu/staff/tomoko-bialock",
      newURL: "https://www.library.ucla.edu/about/staff/tomoko-bialock"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/student-positions",
      newURL: "https://www.library.ucla.edu/about/student-opportunities"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/about-collections",
      newURL: "https://www.library.ucla.edu/collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/search",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/13919.cfm",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/1450.cfm",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/669.cfm?su=37",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/765.cfm?su=77",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/eresources.cfm",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/journals",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/search/search-find",
      newURL: "https://www.library.ucla.edu/collections/access"
    },
    {
      oldURL: "https://www.library.ucla.edu/music/collections/contemporary-music-score-collection",
      newURL: "https://www.library.ucla.edu/collections/explore/contemporary-music-score-collection"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about/giving-special-collections",
      newURL: "https://www.library.ucla.edu/give"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/748",
      newURL: "https://www.library.ucla.edu/give"
    },
    {
      oldURL: "https://www.library.ucla.edu/bookplates/marcie-rothman-endowment-food-studies",
      newURL: "https://www.library.ucla.edu/give/endowments/marcie-rothman-endowment-for-food-studies"
    },
    {
      oldURL: "https://www.library.ucla.edu/bookplates/friends-ucla-armenian-language-culture-studies-collection-endowment",
      newURL: "https://www.library.ucla.edu/give/endowments/the-friends-of-ucla-armenian-language-culture-studies-collection-endowment"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/research-instruction/requesting-lsc-archival-materials-described-online-archive-california",
      newURL: "https://www.library.ucla.edu/help/lsc-materials"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/799",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/research-help",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/drop-and-scheduled-research-assistance/arts-library",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/drop-and-scheduled-research-assistance/library-special-collections",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/drop-and-scheduled-research-assistance/science-and-engineering-library",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/drop-scheduled-research-assistance",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/scheduled-research-assistance",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/start-your-own-research-guide-or-tutorial",
      newURL: "https://www.library.ucla.edu/help/research-help"
    },
    {
      oldURL: "https://www.library.ucla.edu/contact",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "https://www.library.ucla.edu/get-help",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/biomed/contact-biomedical-library",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "https://www.library.ucla.edu/questions",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/items-not-shelf-or-checked-out/recall-checked-out-item",
      newURL: "https://www.library.ucla.edu/help/services-resources/borrow-renew-return"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/loan-periods",
      newURL: "https://www.library.ucla.edu/help/services-resources/borrow-renew-return"
    },
    {
      oldURL: "https://www.library.ucla.edu/computers-computing-services/connect-campus",
      newURL: "https://www.library.ucla.edu/help/services-resources/connecting-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/connect",
      newURL: "https://www.library.ucla.edu/help/services-resources/connecting-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/674",
      newURL: "https://www.library.ucla.edu/help/services-resources/connecting-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/service/campus-access",
      newURL: "https://www.library.ucla.edu/help/services-resources/connecting-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/sites/default/files/Off%20Campus%20Access%20to%20Online%20Resources.pdf",
      newURL: "https://www.library.ucla.edu/help/services-resources/connecting-from-off-campus"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/publishing-data-management/scholarly-communication-services/data-management-curation-services",
      newURL: "https://www.library.ucla.edu/help/services-resources/data-services"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery",
      newURL: "https://www.library.ucla.edu/help/services-resources/document-delivery"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/document-delivery/ucla-users",
      newURL: "https://www.library.ucla.edu/help/services-resources/document-delivery"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/interlibrary-loan-document-delivery/information-borrowing-institutions",
      newURL: "https://www.library.ucla.edu/help/services-resources/document-delivery"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/library-conference-spaces/main-conference-room",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-conference-spaces"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/support-instructors/teaching-consultations-assignment-design",
      newURL: "https://www.library.ucla.edu/help/services-resources/library-instruction/"
    },
    {
      oldURL: "https://www.library.ucla.edu/borrow-renew-return/course-reserves/faculty-reserves",
      newURL: "https://www.library.ucla.edu/help/services-resources/managing-course-reserves"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/borrow-renew-return/course-reserves/faculty-reserves",
      newURL: "https://www.library.ucla.edu/help/services-resources/managing-course-reserves"
    },
    {
      oldURL: "https://www.library.ucla.edu/srlf/how-request-items-stored-srlf",
      newURL: "https://www.library.ucla.edu/help/services-resources/requesting-items-stored-in-the-srlf"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/drop-research-help",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-consultations"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/810",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/research-help/attend-online-research-workshop",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/attend-research-workshop",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops"
    },
    {
      oldURL: "https://www.library.ucla.edu/support/research-help/attend-virtual-research-workshop",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/research-help/attend-research-workshop",
      newURL: "https://www.library.ucla.edu/help/services-resources/research-workshops/"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/collections/suggest-purchase",
      newURL: "https://www.library.ucla.edu/help/services-resources/suggest-a-purchase"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/plan-visit/holding-seminars-library-special-collections#seminars",
      newURL: "https://www.library.ucla.edu/help/services-resources/teaching-with-library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/computers-computing-services/desktop-computers",
      newURL: "https://www.library.ucla.edu/help/services-resources/virtual-desktop"
    },
    {
      oldURL: "https://www.library.ucla.edu/research-teaching-support/research-help/start-your-own-research-guide-or-tutorial",
      newURL: "https://www.library.ucla.edu/help/services-resources/writing-research-tutorials"
    },
    {
      oldURL: "https://www.library.ucla.edu/use/access-privileges/study-learning-spaces",
      newURL: "https://www.library.ucla.edu/help/using-the-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/impact",
      newURL: "https://www.library.ucla.edu/impact/all"
    },
    {
      oldURL: "https://www.library.ucla.edu/events",
      newURL: "https://www.library.ucla.edu/visit/events-exhibitions"
    },
    {
      oldURL: "https://www.library.ucla.edu/news-events/events-agenda?page=1",
      newURL: "https://www.library.ucla.edu/visit/events-exhibitions"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/collections/other-campus-collections",
      newURL: "https://www.library.ucla.edu/visit/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/hours",
      newURL: "https://www.library.ucla.edu/visit/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/lauc-la-affiliate-libraries-centers",
      newURL: "https://www.library.ucla.edu/visit/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/locations",
      newURL: "https://www.library.ucla.edu/visit/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/Arts/9824.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/arts-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/arts/film-television-theater",
      newURL: "https://www.library.ucla.edu/visit/locations/arts-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/biomed",
      newURL: "https://www.library.ucla.edu/visit/locations/biomed"
    },
    {
      oldURL: "https://www.library.ucla.edu/biomed/about/visiting-biomedical-library",
      newURL: "https://www.library.ucla.edu/visit/locations/biomed"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/data-science-center",
      newURL: "https://www.library.ucla.edu/visit/locations/data-science-center"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/social-science-data-archive",
      newURL: "https://www.library.ucla.edu/visit/locations/data-science-center"
    },
    {
      oldURL: "https://www.library.ucla.edu/eastasian",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/6564.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/ealj007.mht",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/east-asian-library-richard-c-rudolph",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/eastasian/index.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/east-asian-library-richard-c-rudolph",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/953",
      newURL: "https://www.library.ucla.edu/visit/locations/east-asian-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/destination/library-special-collections-research-library",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/about",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/elmer-belt-library-vinciana",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/james-o-page-collection",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/discover-collections/online-exhibits/letter-renaissance-double-soul-ariel-soul%C3%A9simon-toparovsky",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/location/library-special-collections/plan-visit",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/534",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/discover-collections/online-exhibits/bloodletting-exhibit",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/medicine-sciences-biomedical-library/baby-books-collection",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/plan-visit",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/special-collections/plan-visit/directions-parking",
      newURL: "https://www.library.ucla.edu/visit/locations/library-special-collections"
    },
    {
      oldURL: "https://www.library.ucla.edu/about/music-library-hours",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/music",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/music/9704.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/music-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/node/384",
      newURL: "https://www.library.ucla.edu/visit/locations/research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/yrl/about",
      newURL: "https://www.library.ucla.edu/visit/locations/research-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/sel/10320.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/libraries/sel/12510.cfm",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel-ems",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel-geology",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/sel/about/staff-directory",
      newURL: "https://www.library.ucla.edu/visit/locations/science-engineering-library"
    },
    {
      oldURL: "https://www.library.ucla.edu/service/iitems-stored-southern-regional-library-facility-srlf",
      newURL: "https://www.library.ucla.edu/visit/locations/southern-regional-library-facility"
    },
    {
      oldURL: "https://www.library.ucla.edu/srlf/about",
      newURL: "https://www.library.ucla.edu/visit/locations/southern-regional-library-facility"
    },
    {
      oldURL: "https://www.library.ucla.edu/clicc",
      newURL: "/about/programs/campus-library-instructional-computing-commons-clicc"
    },
    {
      oldURL: "clicc.ucla.edu",
      newURL: "https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc"
    },
    {
      oldURL: "www.clicc.ucla.edu",
      newURL: "https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc"
    },
    {
      oldURL: "help.library.ucla.edu",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "https://www.library.ucla.edu/questions/questions-ask-us",
      newURL: "https://www.library.ucla.edu/help/services-resources/ask-us"
    },
    {
      oldURL: "hours.library.ucla.edu",
      newURL: "https://www.library.ucla.edu/visit/locations"
    },
    {
      oldURL: "https://www.library.ucla.edu/hours",
      newURL: "https://www.library.ucla.edu/visit/locations"
    }
  ]

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var host = request.headers.host.value;
    var oldURL = `https://${host}/${uri}`
    for (const element of redirectsMapping) {
        if(element.oldURL.indexOf(oldURL) !== -1){
            var newurl = element.newURL // Change the redirect URL to your choice 
            var response = {
                statusCode: 302,
                statusDescription: 'Found',
                headers:
                    { "location": { "value": newurl } }
                }

            return response;
        }
    }
}
