export interface DepartementI {
  nom: string;
  code: string;
  region: string;
}

export const departements: DepartementI[] = [
  {
    nom: 'Bas Rhin',
    code: '67',
    region: 'Alsace',
  },
  {
    nom: 'Haut Rhin',
    code: '68',
    region: 'Alsace',
  },
  {
    nom: 'Dordogne',
    code: '24',
    region: 'Aquitaine',
  },
  {
    nom: 'Gironde',
    code: '33',
    region: 'Aquitaine',
  },
  {
    nom: 'Landes',
    code: '40',
    region: 'Aquitaine',
  },
  {
    nom: 'Lot et Garonne',
    code: '47',
    region: 'Aquitaine',
  },
  {
    nom: 'Pyrénées Atlantiques',
    code: '64',
    region: 'Aquitaine',
  },
  {
    nom: 'Allier',
    code: '03',
    region: 'Auvergne',
  },
  {
    nom: 'Cantal',
    code: '15',
    region: 'Auvergne',
  },
  {
    nom: 'Haute Loire',
    code: '43',
    region: 'Auvergne',
  },
  {
    nom: 'Puy de Dôme',
    code: '63',
    region: 'Auvergne',
  },
  {
    nom: 'Calvados',
    code: '14',
    region: 'Basse-Normandie',
  },
  {
    nom: 'Manche',
    code: '50',
    region: 'Basse-Normandie',
  },
  {
    nom: 'Orne',
    code: '61',
    region: 'Basse-Normandie',
  },
  {
    nom: "Côte d'Or",
    code: '21',
    region: 'Bourgogne',
  },
  {
    nom: 'Nièvre',
    code: '58',
    region: 'Bourgogne',
  },
  {
    nom: 'Saône et Loire',
    code: '71',
    region: 'Bourgogne',
  },
  {
    nom: 'Yonne',
    code: '89',
    region: 'Bourgogne',
  },
  {
    nom: "Côtes d'Armor",
    code: '22',
    region: 'Bretagne',
  },
  {
    nom: 'Finistère',
    code: '29',
    region: 'Bretagne',
  },
  {
    nom: 'Ille et Vilaine',
    code: '35',
    region: 'Bretagne',
  },
  {
    nom: 'Morbihan',
    code: '56',
    region: 'Bretagne',
  },
  {
    nom: 'Cher',
    code: '18',
    region: 'Centre',
  },
  {
    nom: 'Eure et Loir',
    code: '28',
    region: 'Centre',
  },
  {
    nom: 'Indre',
    code: '36',
    region: 'Centre',
  },
  {
    nom: 'Indre et Loire',
    code: '37',
    region: 'Centre',
  },
  {
    nom: 'Loir et Cher',
    code: '41',
    region: 'Centre',
  },
  {
    nom: 'Loiret',
    code: '45',
    region: 'Centre',
  },
  {
    nom: 'Ardennes',
    code: '08',
    region: 'Champagne-Ardenne',
  },
  {
    nom: 'Aube',
    code: '10',
    region: 'Champagne-Ardenne',
  },
  {
    nom: 'Marne',
    code: '51',
    region: 'Champagne-Ardenne',
  },
  {
    nom: 'Haute Marne',
    code: '52',
    region: 'Champagne-Ardenne',
  },
  {
    nom: 'Corse du Sud',
    code: '2A',
    region: 'Corse',
  },
  {
    nom: 'Haute Corse',
    code: '2B',
    region: 'Corse',
  },
  {
    nom: 'Doubs',
    code: '25',
    region: 'Franche-Comté',
  },
  {
    nom: 'Jura',
    code: '39',
    region: 'Franche-Comté',
  },
  {
    nom: 'Haute Saône',
    code: '70',
    region: 'Franche-Comté',
  },
  {
    nom: 'Territoire de Belfort',
    code: '90',
    region: 'Franche-Comté',
  },
  {
    nom: 'Eure',
    code: '27',
    region: 'Haute-Normandie',
  },
  {
    nom: 'Seine Maritime',
    code: '76',
    region: 'Haute-Normandie',
  },
  {
    nom: 'Paris',
    code: '75',
    region: 'Ile-de-France',
  },
  {
    nom: 'Seine et Marne',
    code: '77',
    region: 'Ile-de-France',
  },
  {
    nom: 'Yvelines',
    code: '78',
    region: 'Ile-de-France',
  },
  {
    nom: 'Essonne',
    code: '91',
    region: 'Ile-de-France',
  },
  {
    nom: 'Hauts de Seine',
    code: '92',
    region: 'Ile-de-France',
  },
  {
    nom: 'Seine St Denis',
    code: '93',
    region: 'Ile-de-France',
  },
  {
    nom: 'Val de Marne',
    code: '94',
    region: 'Ile-de-France',
  },
  {
    nom: "Val d'Oise",
    code: '95',
    region: 'Ile-de-France',
  },
  {
    nom: 'Aude',
    code: '11',
    region: 'Languedoc-Roussillon',
  },
  {
    nom: 'Gard',
    code: '30',
    region: 'Languedoc-Roussillon',
  },
  {
    nom: 'Hérault',
    code: '34',
    region: 'Languedoc-Roussillon',
  },
  {
    nom: 'Lozère',
    code: '48',
    region: 'Languedoc-Roussillon',
  },
  {
    nom: 'Pyrénées Orientales',
    code: '66',
    region: 'Languedoc-Roussillon',
  },
  {
    nom: 'Corrèze',
    code: '19',
    region: 'Limousin',
  },
  {
    nom: 'Creuse',
    code: '23',
    region: 'Limousin',
  },
  {
    nom: 'Haute Vienne',
    code: '87',
    region: 'Limousin',
  },
  {
    nom: 'Meurthe et Moselle',
    code: '54',
    region: 'Lorraine',
  },
  {
    nom: 'Meuse',
    code: '55',
    region: 'Lorraine',
  },
  {
    nom: 'Moselle',
    code: '57',
    region: 'Lorraine',
  },
  {
    nom: 'Vosges',
    code: '88',
    region: 'Lorraine',
  },
  {
    nom: 'Ariège',
    code: '09',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Aveyron',
    code: '12',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Haute Garonne',
    code: '31',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Gers',
    code: '32',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Lot',
    code: '46',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Hautes Pyrénées',
    code: '65',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Tarn',
    code: '81',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Tarn et Garonne',
    code: '82',
    region: 'Midi-Pyrénées',
  },
  {
    nom: 'Nord',
    code: '59',
    region: 'Nord-Pas-de-Calais',
  },
  {
    nom: 'Pas de Calais',
    code: '62',
    region: 'Nord-Pas-de-Calais',
  },
  {
    nom: 'Loire Atlantique',
    code: '44',
    region: 'Pays de la Loire',
  },
  {
    nom: 'Maine et Loire',
    code: '49',
    region: 'Pays de la Loire',
  },
  {
    nom: 'Mayenne',
    code: '53',
    region: 'Pays de la Loire',
  },
  {
    nom: 'Sarthe',
    code: '72',
    region: 'Pays de la Loire',
  },
  {
    nom: 'Vendée',
    code: '85',
    region: 'Pays de la Loire',
  },
  {
    nom: 'Aisne',
    code: '02',
    region: 'Picardie',
  },
  {
    nom: 'Oise',
    code: '60',
    region: 'Picardie',
  },
  {
    nom: 'Somme',
    code: '80',
    region: 'Picardie',
  },
  {
    nom: 'Charente',
    code: '16',
    region: 'Poitou-Charentes',
  },
  {
    nom: 'Charente Maritime',
    code: '17',
    region: 'Poitou-Charentes',
  },
  {
    nom: 'Deux Sèvres',
    code: '79',
    region: 'Poitou-Charentes',
  },
  {
    nom: 'Vienne',
    code: '86',
    region: 'Poitou-Charentes',
  },
  {
    nom: 'Alpes de Haute Provence',
    code: '04',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Hautes Alpes',
    code: '05',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Alpes Maritimes',
    code: '06',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Bouches du Rhône',
    code: '13',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Var',
    code: '83',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Vaucluse',
    code: '84',
    region: "Provence-Alpes-Côte-d'Azur",
  },
  {
    nom: 'Ain',
    code: '01',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Ardèche',
    code: '07',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Drôme',
    code: '26',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Isère',
    code: '38',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Loire',
    code: '42',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Rhône-Alpes',
    code: '69',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Savoie',
    code: '73',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Haute Savoie',
    code: '74',
    region: 'Rhône-Alpes',
  },
  {
    nom: 'Guadeloupe',
    code: '971',
    region: 'DOM',
  },
  {
    nom: 'Martinique',
    code: '972',
    region: 'DOM',
  },
  {
    nom: 'Guyane',
    code: '973',
    region: 'DOM',
  },
  {
    nom: 'Réunion',
    code: '974',
    region: 'DOM',
  },
];
