import { prisma } from '~/lib/prisma'
import { readBody } from 'h3'

// Cette fonction vérifie si un utilisateur peut se connecter
export default defineEventHandler(async (event) => {
  
  const body = await readBody(event)
  
  if (!body.email || !body.password) {
    return { 
      success: false, 
      message: 'Veuillez remplir tous les champs' 
    }
  }

  try {
    // On cherche l'utilisateur dans la base de données par son email
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { email: body.email }
    })

    if (!utilisateur) {
      return { 
        success: false, 
        message: 'Utilisateur introuvable' 
      }
    }

    if (utilisateur.password !== body.password) {
      return { 
        success: false, 
        message: 'Mot de passe incorrect' 
      }
    }

    // Si tout est bon, connexion réussie !
    return { 
      success: true, 
      message: 'Connexion réussie !',
      utilisateur: {
        nom: utilisateur.nom,
        email: utilisateur.email
      }
    }
  } catch (error) {
    console.error(error)
    return { 
      success: false, 
      message: 'Erreur du serveur' 
    }
  }
})


