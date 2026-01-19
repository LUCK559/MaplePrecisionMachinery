export interface ProductCategory {
  id: string;
  nameEn: string;
  nameFr: string;
  path: string;
  imagePath: string;
  descriptionEn?: string;
  descriptionFr?: string;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  nameEn: string;
  nameFr: string;
  path: string;
  imagePath?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'cast-forged',
    nameEn: 'Cast and Forged Parts',
    nameFr: 'Pièces moulées et forgées',
    path: '/products/cast-forged',
    imagePath: '/Product image/Cast and forged parts',
    descriptionEn: 'High-quality cast and forged parts for various industrial applications',
    descriptionFr: 'Pièces moulées et forgées de haute qualité pour diverses applications industrielles',
  },
  {
    id: 'mechanical',
    nameEn: 'Mechanical Equipment and Parts',
    nameFr: 'Équipements et pièces mécaniques',
    path: '/products/mechanical',
    imagePath: '/Product image/Mechanical equipment and parts BB version data',
    descriptionEn: 'Professional mechanical equipment and precision parts',
    descriptionFr: 'Équipements mécaniques professionnels et pièces de précision',
    subCategories: [
      {
        id: 'forged-steel',
        nameEn: 'Forged Steel Parts',
        nameFr: 'Pièces en acier forgé',
        path: '/products/mechanical/forged-steel',
        imagePath: '/Product image/Mechanical equipment and parts BB version data/Forged steel parts锻钢件',
      },
      {
        id: 'non-ferrous',
        nameEn: 'Non-ferrous Metal Castings',
        nameFr: 'Pièces moulées en métal non ferreux',
        path: '/products/mechanical/non-ferrous',
        imagePath: '/Product image/Mechanical equipment and parts BB version data/Non-ferrous metal castings有色金属铸件',
      },
      {
        id: 'steel-casting',
        nameEn: 'Steel Casting',
        nameFr: 'Pièces moulées en acier',
        path: '/products/mechanical/steel-casting',
        imagePath: '/Product image/Mechanical equipment and parts BB version data/Steel casting铸钢件',
      },
      {
        id: 'steel-structure',
        nameEn: 'Steel Structure',
        nameFr: 'Structure en acier',
        path: '/products/mechanical/steel-structure',
        imagePath: '/Product image/Mechanical equipment and parts BB version data/Steel structure钢结构件',
      },
    ],
  },
  {
    id: 'ship-fittings',
    nameEn: 'Ship Fittings',
    nameFr: 'Accessoires maritimes',
    path: '/products/ship-fittings',
    imagePath: '/Product image/Ship fittings',
    descriptionEn: 'Marine fittings and ship components',
    descriptionFr: 'Accessoires maritimes et composants de navires',
    subCategories: [
      {
        id: 'marine-fittings',
        nameEn: 'Marine Fittings',
        nameFr: 'Accessoires maritimes',
        path: '/products/ship-fittings/marine-fittings',
        imagePath: '/Product image/Ship fittings/Marine fittings',
      },
      {
        id: 'marine-steel',
        nameEn: 'Marine Steel',
        nameFr: 'Acier marin',
        path: '/products/ship-fittings/marine-steel',
        imagePath: '/Product image/Ship fittings/Marine steel;',
      },
      {
        id: 'portable-flange',
        nameEn: 'Portable Flange Circumference Milling Machine',
        nameFr: 'Machine de fraisage de circonférence de bride portable',
        path: '/products/ship-fittings/portable-flange',
        imagePath: '/Product image/Ship fittings/Portable flange circumference milling machine',
      },
      {
        id: 'shaft-rudder',
        nameEn: 'Shaft & Rudder System',
        nameFr: 'Système d\'arbre et de gouvernail',
        path: '/products/ship-fittings/shaft-rudder',
        imagePath: '/Product image/Ship fittings/Shaft; rudder system',
      },
      {
        id: 'ship-propeller',
        nameEn: 'Ship Propeller',
        nameFr: 'Hélice de navire',
        path: '/products/ship-fittings/ship-propeller',
        imagePath: '/Product image/Ship fittings/Ship propeller',
      },
    ],
  },
  {
    id: 'trailer-parts',
    nameEn: 'Trailer Parts',
    nameFr: 'Pièces de remorque',
    path: '/products/trailer-parts',
    imagePath: '/Product image/Trailer parts 123',
    descriptionEn: 'Trailer components and parts',
    descriptionFr: 'Composants et pièces de remorque',
  },
];

export const getCategoryById = (id: string): ProductCategory | undefined => {
  return productCategories.find(cat => cat.id === id);
};

export const getSubCategoryById = (categoryId: string, subCategoryId: string): SubCategory | undefined => {
  const category = getCategoryById(categoryId);
  return category?.subCategories?.find(sub => sub.id === subCategoryId);
};
