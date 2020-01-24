export interface CardConfig {
  type: string;
  entity: string;
  name?: string;
  dropdown?: 'hvac_modes' | 'preset_modes' | string;
}

export interface Values {
  temperature?: number;
}
