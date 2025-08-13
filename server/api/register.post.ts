
import { prisma } from '~/lib/prisma'
import { readBody } from 'h3'

// Cette fonction inscrit un nouvel utilisateur
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.nom || !body.email || !body.password) {
    return { 
      success: false, 
      message: 'Nom, email et mot de passe sont obligatoires' 
    }
  }

  try {
    const utilisateurExiste = await prisma.utilisateur.findUnique({
      where: { email: body.email }
    })

    if (utilisateurExiste) {
      return { 
        success: false, 
        message: 'Cet email est déjà utilisé' 
      }
    }

    const nouvelUtilisateur = await prisma.utilisateur.create({
      data: {
        nom: body.nom,
        prenom: body.prenom || '',
        email: body.email,
        password: body.password
      }
    })

    return { 
      success: true, 
      message: 'Inscription réussie ! Vous pouvez maintenant vous connecter.',
      utilisateur: {
        nom: nouvelUtilisateur.nom,
        email: nouvelUtilisateur.email
      }
    }
  } catch (error) {
    console.error(error)
    return { 
      success: false, 
      message: 'Erreur lors de l\'inscription' 
    }
  }
})