export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bounty: {
        Row: {
          amount: number | null
          bountypage: string | null
          company: string | null
          companylogo: string | null
          created_at: string
          description: string | null
          enddate: string | null
          featuredimage: string | null
          id: number
          referencelink: string | null
          reward: string | null
          rewardtype: string | null
          slug: string | null
          startdate: string | null
          status: string | null
          title: string | null
          user: string | null
          website: string | null
        }
        Insert: {
          amount?: number | null
          bountypage?: string | null
          company?: string | null
          companylogo?: string | null
          created_at?: string
          description?: string | null
          enddate?: string | null
          featuredimage?: string | null
          id?: number
          referencelink?: string | null
          reward?: string | null
          rewardtype?: string | null
          slug?: string | null
          startdate?: string | null
          status?: string | null
          title?: string | null
          user?: string | null
          website?: string | null
        }
        Update: {
          amount?: number | null
          bountypage?: string | null
          company?: string | null
          companylogo?: string | null
          created_at?: string
          description?: string | null
          enddate?: string | null
          featuredimage?: string | null
          id?: number
          referencelink?: string | null
          reward?: string | null
          rewardtype?: string | null
          slug?: string | null
          startdate?: string | null
          status?: string | null
          title?: string | null
          user?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
